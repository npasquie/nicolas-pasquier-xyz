import { Container, Row, Col, Image, Button, Navbar, Fade } from "react-bootstrap"
import meImg from "../assets/me.png"
import "./styles.css"
import TechLogo from "./TechLogo"

export default function App(){
	return(<>
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand className="navBarTitle">nicolas.pasquier.xyz</Navbar.Brand>
		</Navbar>
		<Container className="main">
			<Row>
				<Col sm={8} className="titlePart">
					<div className="slogan">Bring your Blockchain idea to life</div>
					<div className="titleP">I'm a French Blockchain Engineer<br/>
					I do <div className="important">Fullstack Dapp development, from Smart Contract to WebApp</div></div><br/>
					<Button variant="dark" size="lg"><div className="callButton">👉 Schedule a Call 👈</div></Button>
				</Col>
				<Col className="titlePart">
					<Image className="meImg" src={meImg}/>
				</Col>
			</Row>
		</Container>
		<div className="infos">
			<Container >
				I have <div className="important">3+ years of experience</div> in Fullstack & Blockain development<br/>
				Blockchain Projects I worked on includes <div className="important">NFTs, Coins, Auctions, Votes ...</div><br/><br/>
				I work with those technologies daily :
			</Container>
		</div>
		<Container className="techLogos">
			<Row className="logoRow">
				{[0,1,2,3].map(index => <TechLogo key={index} i={index}/>)}
			</Row>
		</Container>
		<div className="demo">
			<Container >
				<Button variant="light"><div className="demoButton">Try a Blockchain Transaction</div></Button>
			</Container>
		</div>
	</>)
}