import { Container, Row, Col, Image, Button, Navbar, Fade } from "react-bootstrap"
import meImg from "../assets/me.png"
import "./styles.css"
import docker from "../assets/docker.png"
import hardhat from "../assets/hardhat.png"
import react from "../assets/react.png"
import solidity from "../assets/solidity.png"
import web3js from "../assets/web3js.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongodb.jpg"

export default function App(){
	const logos = [docker, hardhat, react, solidity, web3js, node, mongodb]

	return(<>
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand className="navBarTitle">nicolas.pasquier.xyz</Navbar.Brand>
		</Navbar>
		<Container className="main">
			<Row>
				<Col sm={8} className="titlePart">
					<h1>Bring your Blockchain idea to life</h1>
					<p className="titleP">I'm a French Blockchain Engineer<br/>
					I do <div className="important">Fullstack Dapp development, from Smart Contract to WebApp</div></p>
					<Button className="callButton" variant="dark" size="lg">Schedule a Call</Button>
				</Col>
				<Col className="titlePart">
					<Image className="meImg" src={meImg}/>
				</Col>
			</Row>
		</Container>
		<div className="infos">
			<Container >
				<br/>
				I have <div className="important">3+ years of experience</div> in Fullstack & Blockain development<br/>
				Projects I worked on includes <div className="important">NFTs, Coins, Auctions, Vote ...</div><br/><br/>
				I mastered those technologies :
			</Container>
		</div>
		<Container className="techLogos">
			<Row className="logoRow">
				{logos.splice(0,4).map((logo,i) => <Col>
						<Fade in={true} key={i}>
							<Image className="logoImg" src={logo}/>
						</Fade>
					</Col>)}
			</Row>
		</Container>
	</>)
}