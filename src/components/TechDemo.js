import HDWalletProvider from "@truffle/hdwallet-provider"
import Web3 from "web3"
import { privateKey } from "../secret.json"
import * as skinsAbi from "../assets/skinsAbi.json"
import { useState } from "react"
import { Button, Spinner } from "react-bootstrap"

const TwentyGwei = '20000000000'
const skinsAddress = "0x445E7AB3d6c000b8fDe27aa11437a8813D9C8aed"

// tx states
const NOT_SENT = "NOT SENT"
const SENDING = "SENDING"
const SENT = "SENT"
const MINED = "MINED"
const ERROR = "ERROR"

export default function TechDemo(){
	const provider = new HDWalletProvider({ // private key can easily be found but has no value, testnet only
		privateKeys: [privateKey],
		providerOrUrl: "https://rpc.testnet.fantom.network/"
	})
	const web3 = new Web3(provider)
	const [txInfo, setTxInfo] = useState({state: NOT_SENT})
	const [skinId, setSkinId] = useState(undefined)

	async function sendMint(){
		const skins = new web3.eth.Contract(skinsAbi.default, skinsAddress)
		const mintOne = skins.methods.mint()
		console.log(mintOne);
		const accounts = await web3.eth.getAccounts()
    let gas = await mintOne.estimateGas({from: accounts[0]})
    let tx = await mintOne.send({from: accounts[0], gas: gas, gasPrice: TwentyGwei})
			.on('error', err =>{
				console.log(err)
				setTxInfo({state: ERROR})})
			.on('sending', ()=>setTxInfo({state: SENDING}))
			.on('sent', ()=>setTxInfo({state: SENT}))
			.on('transactionHash', hash => setTxInfo({state: MINED, hash: hash}))
		
		setSkinId(tx.events.Transfer.returnValues.tokenId)
	}

	return(<>
	<Button variant="light" onClick={sendMint} disabled={txInfo.state === ERROR || txInfo.state !== NOT_SENT}>
		<div className="demoButton">
			{txInfo.state === NOT_SENT && <>Try a Blockchain Transaction</>}
			{txInfo.state === SENDING && 
				<>Sending the transaction ... <Spinner variant="light" animation="border"/></>}
			{txInfo.state === SENT && 
				<>Mining the transaction ... <Spinner variant="light" animation="border"/></>}
			{txInfo.state === MINED && <>Try Again !</>}
			{txInfo.state === ERROR && <>Something went wrong :(</>}
		</div>
	</Button>
	{txInfo.state === ERROR && <>Open the console for error info.</>}
	</>)
}