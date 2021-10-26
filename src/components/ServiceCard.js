import { Card, Col } from "react-bootstrap"
import "./styles.css"

export default function ServiceCard({children, title}){
	return(
		<Col className="serviceCard">
			<Card variant="light">
				<Card.Header>
					<div className="serviceCard-title">
						{title}
					</div>
				</Card.Header>
				<Card.Body className="serviceCard-body">
					{children}
				</Card.Body>
			</Card>
		</Col>)
}