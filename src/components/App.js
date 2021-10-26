import { Container, Row, Col, Image, Button, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap"
import meImg from "../assets/me.png"
import "./styles.css"
import TechLogo from "./TechLogo"
import TechDemo from "./TechDemo"
import ImageLink from "./ImageLink"
import gith1 from "../assets/github1.png"
import gith2 from "../assets/github2.png"
import linkedin from "../assets/linkedin.png"
import telegram from "../assets/telegram.png"
import medium from "../assets/medium.png"
import twitter from "../assets/twitter.png"

export default function App(){
	return(<div className="app">
		<Navbar variant="dark">
		<Container>
			<Navbar.Brand className="navBarTitle">nicolas.pasquier.xyz</Navbar.Brand>
				<Col></Col><Col md="auto">
					<ImageLink link="https://github.com/npasquie" src={gith1}/>
					<ImageLink link="https://github.com/t0bou" src={gith2}/>
					<ImageLink link="https://www.linkedin.com/in/nicopasquier/" src={linkedin}/>
					<ImageLink link="https://medium.com/@tobou" src={medium}/>
					<ImageLink link="https://twitter.com/t0bou" src={twitter}/>
					<OverlayTrigger placement="bottom" overlay={<Tooltip>@t0bou</Tooltip>}>
						<Image className="imageLink" src={telegram}/>
					</OverlayTrigger>
				</Col>
			</Container>
		</Navbar>
		<Container className="main">
			<Row>
				<Col className="titlePart">
					<Image className="meImg" src={meImg}/>
				</Col>
				<Col sm={8} className="titlePart">
					<div className="slogan">Bring your Blockchain idea to life</div>
					<div className="titleP">I'm a French Blockchain Engineer<br/>
					I do <div className="important">Fullstack Dapp development, from Smart Contract to WebApp</div></div><br/>
					<Button variant="dark" size="lg"
						onClick={()=>{window.location.href = "https://calendly.com/nicolas-pasquier/30min"}}>
						<div className="callButton">👉 Schedule a Call 👈</div></Button>
				</Col>
			</Row>
		</Container>
		<div className="infos">
			<Container >
				I have <div className="important">3+ years of experience</div> in Fullstack & Blockchain development<br/>
				Blockchain Projects I worked on includes <div className="important">NFTs, Coins, Auctions, Votes ...</div><br/><br/>
				I work with those technologies daily :
			</Container>
		</div>
		<Container className="techLogos">
			<Row className="logoRow">
				{[...Array(6).keys()].map(index => <TechLogo key={index} i={index}/>)}
			</Row>
		</Container>
		<div className="demo">
			<Container>
				<div className="important">Try a Tech Demo !</div><br/><br/>
				<TechDemo/>
			</Container>
		</div>
	</div>)
}