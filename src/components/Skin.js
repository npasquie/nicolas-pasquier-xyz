import { useEffect, useState } from "react"
import { Card, Spinner, Row, Col } from "react-bootstrap"
import * as skinsAbi from "../assets/skinsAbi.json"
import Web3 from "web3"
import "./styles.css"

const skinsAddress = "0x445E7AB3d6c000b8fDe27aa11437a8813D9C8aed"

export default function Skin({id, hash}){
	const web3 = new Web3("https://rpc.testnet.fantom.network/")
	const [tokenUri, setTokenUri] = useState(undefined) 
	useEffect(async ()=>{
		const skins = new web3.eth.Contract(skinsAbi.default, skinsAddress)
		let _json = await skins.methods.tokenURI(id).call()
		setTokenUri(_json)
	},[id])

	let skinData
	if(tokenUri){
		skinData = decodeURI(tokenUri).split("data:application/json;base64,").pop()
		skinData = JSON.parse(Buffer.from(skinData,"base64").toString())
	}

	return (<>
		<Row>
			<Col></Col><Col><Row>
				<Card className="skinCard" bg="dark">
					{tokenUri && <>
						<Card.Img src={skinData.image}/>
						<br/>
						<Card.Title>{skinData.name}</Card.Title>
						<Card.Text>
							<a href={`https://testnet.ftmscan.com/tx/${hash}`} target="_blank">
								See the mint transaction</a>
						</Card.Text>
					</>}
					{!tokenUri && <Spinner animation="border"/>}
				</Card>
			</Row></Col><Col></Col>
		</Row>
	</>)
}