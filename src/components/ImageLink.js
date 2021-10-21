import { Image } from "react-bootstrap"
import "./styles.css"

export default function ImageLink({link, src}){
	return(<>
		<a href={link} target="_blank">
			<Image className="imageLink" src={src}/>
		</a>
	</>)
}