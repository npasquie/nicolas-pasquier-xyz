import { Container, Row, Col, Image, Button, Navbar } from "react-bootstrap"
import meImg from "../assets/me.png"
import "./styles.css"

export default function App(){
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
		<Row className="infos">
			<Container>
				<Container>
					<br/>
					<p>I have <div className="important">3+ years of experience</div> in Fullstack & Blockain development<br/>
					Projects I worked on includes <div className="important">NFTs, Coins, Auctions, Vote ...</div><br/><br/>
					I mastered those technologies :
					</p>
				</Container>
			</Container>
		</Row>
	</>)
}