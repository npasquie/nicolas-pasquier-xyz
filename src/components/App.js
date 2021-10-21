import { Container, Row, Col, Image } from "react-bootstrap"
import meImg from "../assets/me.png"
import "./styles.css"

export default function App(){
	return(<>
		<Container className="main">
			<Row>
				<Col sm={8} className="titlePart">
					<h1>Bring your Blockchain idea to life</h1>
					<p>I'm a French Blockchain Engineer<br/>
					I do <div className="important">Fullstack Dapp development, from Smart Contract to WebApp</div></p>
				</Col>
				<Col className="titlePart">
					<Image className="meImg" src={meImg}/>
				</Col>
			</Row>
		</Container>
	</>)
}