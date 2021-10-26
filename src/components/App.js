import { Container, Row, Col, Image, Button } from "react-bootstrap"
import meImg from "../assets/me.png"
import "./styles.css"
import TechLogo from "./TechLogo"
import TechDemo from "./TechDemo"
import ImageLink from "./ImageLink"
import medium from "../assets/medium.png"
import gith from "../assets/gith.png"
import web from "../assets/web.png"
import ServiceCard from "./ServiceCard"
import Bar from "./Bar"

export default function App(){
	return(<div className="app">
		<Bar/>
		<Container className="main">
			<Row>
				<Col className="titlePart">
					<Image className="meImg" src={meImg}/>
				</Col>
				<Col sm={8} className="titlePart">
					<div className="slogan">Bring your Blockchain idea to life</div>
					<div className="titleP">I'm a French Freelance Blockchain Engineer<br/>
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
				I am passionate about Blockchain and Decentralization<br/><br/>
				<div className="important">I can help your Project join the Revolution</div><br/>
				<br/>
				I work with those technologies daily :
			</Container>
		</div>
		<Container className="techLogos">
			<Row className="logoRow">
				{[...Array(6).keys()].map(index => <TechLogo key={index} i={index}/>)}
			</Row>
		</Container>
		<div className="infos">
			<Container>
				Some of my previous projects :
				<ul>
					<li><div className="important">Rarity Skins</div><br/>
						NFT collection of skins for Andre Cronje's game Rarity - 15k$ of turnover<br/>
						<ImageLink link="https://github.com/t0bou/Rarity-Skins" src={gith} sm/>
						<ImageLink link="https://medium.com/@tobou/introducing-rarity-skins-7833b4e54806" src={medium} sm/>
						<ImageLink link="https://rarity-skins.com" src={web} sm/>
					</li>
					<li><div className="important">FairCoin</div><br/>
						Experiment on Universal Basic Income using ERC-20<br/>
						<ImageLink link="https://github.com/npasquie/FairCoin" src={gith} sm/>
						<ImageLink link="https://tobou.medium.com/demandez-votre-revenu-universel-en-monnaie-locale-ecb436954f7c" src={medium} sm/>
						<ImageLink link="https://npasquie.github.io/" src={web} sm/>
					</li>
					<li><div className="important">Vote Dapp</div><br/>
						Dapp for voting with blockchain - used in two elections<br/>
						<ImageLink link="https://github.com/npasquie/vote-dapp-build" src={gith} sm/>
					</li>
				</ul>
			</Container>
		</div>
		<Container className="services">
			What can I do for you ?<br/><br/>
			<Row>
				<ServiceCard title="💡 Advise 💡">
					Leverage my expertise to take the best decisions for your blockchain project
				</ServiceCard>
				<ServiceCard title="👷‍♂️ Build 👷‍♂️">
					I develop your Smart Contracts or WebApp, or the whole application
				</ServiceCard>
				<ServiceCard title="🧑‍🎓 Teach 🧑‍🎓">
					Get a formation on blockchain subjects such as NFTs, DeFi or Smart Contracts
				</ServiceCard>
			</Row>
			<Button variant="dark" size="lg" className="secondButton"
						onClick={()=>{window.location.href = "https://calendly.com/nicolas-pasquier/30min"}}>
						<div className="callButton">👉 Schedule a Call 👈</div></Button>
		</Container>
		<div className="demo">
			<Container>
				<div className="important">Try a Tech Demo !</div><br/><br/>
				<TechDemo/>
			</Container>
		</div>
		<Bar/>
	</div>)
}