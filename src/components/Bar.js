import { Container, Col, Image, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap"
import ImageLink from "./ImageLink"
import gith1 from "../assets/github1.png"
import gith2 from "../assets/github2.png"
import linkedin from "../assets/linkedin.png"
import telegram from "../assets/telegram.png"
import medium from "../assets/medium.png"
import twitter from "../assets/twitter.png"
import mail from "../assets/mail.png"
import phone from "../assets/phone.png"
import "./styles.css"

export default function Bar(){
    return(<Navbar variant="dark">
		<Container>
			<Navbar.Brand className="navBarTitle">nicolas.pasquier.xyz</Navbar.Brand>
				<Col></Col><Col md="auto">
                    <a href="tel:+33686823403" target="_blank">
			            <Image className="imageLink" src={phone}/>
		            </a>
                    <a href="mailto:nicolas@pasquier.xyz" target="_blank">
			            <Image className="imageLink" src={mail}/>
		            </a>
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
		</Navbar>)
}