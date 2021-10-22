import docker from "../assets/docker.png"
import hardhat from "../assets/hardhat.png"
import react from "../assets/react.png"
import solidity from "../assets/solidity.png"
import web3js from "../assets/web3js.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongodb.jpg"
import ethers from "../assets/ethers.png"
import truffle from "../assets/truffle.png"
import metamask from "../assets/metamask.png"
import remix from "../assets/remix.png"
import { Image, Col, Fade } from "react-bootstrap"
import { useEffect, useState } from "react"
import "./styles.css"

export default function TechLogo({i}){
	const logos = [solidity, react, docker, hardhat, mongodb, node, web3js, truffle, ethers, remix, metamask]
	const [logoDisplayIndex, setLogoDisplayIndex] = useState(i)
	const [fade, setFade] = useState(false)
	const blankTime = 500
	const displayTime = 6000
	const fadeTime = 500
	useEffect(()=>{
		const timerOn = setTimeout(() => setFade(true), blankTime)
		const timerOff = setTimeout(() => setFade(false), blankTime + displayTime)
		const timerChange = setTimeout(() => setLogoDisplayIndex(logoDisplayIndex + 4), blankTime + displayTime + fadeTime)
    return () => {
			clearTimeout(timerOn)
			clearTimeout(timerOff)
			clearTimeout(timerChange)
		}
  }, [logoDisplayIndex])

	return(<>
		<Col>
			<Fade in={fade}>
				<Image className="logoImg" src={logos[logoDisplayIndex % (logos.length)]}/>
			</Fade>
		</Col>
	</>)
}