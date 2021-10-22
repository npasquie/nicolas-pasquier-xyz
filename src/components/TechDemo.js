import HDWalletProvider from "@truffle/hdwallet-provider"
import Web3 from "web3"
import { privateKey } from "../secret.json"
import * as skinsAbi from "../assets/skinsAbi.json"
import { useState } from "react"
import { Button, Row, Col, Spinner } from "react-bootstrap"
import Skin from "./Skin"

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
		<Row>
		<Button variant="light" onClick={sendMint} disabled={
				txInfo.state === ERROR || txInfo.state === SENT || txInfo.state === SENDING}>
			<div className="demoButton">
				{txInfo.state === NOT_SENT && <>What does this button ? 🤔</>}
				{txInfo.state === SENDING && 
					<>Sending the transaction ...</>}
				{txInfo.state === SENT && 
					<>Mining the transaction ...</>}
				{txInfo.state === MINED && <>Try Again !</>}
				{txInfo.state === ERROR && <>Something went wrong :(</>}
			</div>
		</Button>
		</Row>
		{txInfo.state === ERROR && <Col>Open the console for error info.</Col>}
		{txInfo.state === MINED && 
		<Row><Col></Col><Col><Row>
			<div className="minted">You just minted a NFT !</div>
		</Row></Col><Col></Col></Row>}
		{txInfo.state === MINED && !skinId && <Spinner animation="border" variant="light"/>}
		{txInfo.state === MINED && skinId && <Skin id={skinId} hash={txInfo.hash}/>}
	</>)
}