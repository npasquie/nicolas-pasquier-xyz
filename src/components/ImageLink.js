import { Image } from "react-bootstrap"
import "./styles.css"

export default function ImageLink({link, src, sm}){
	return(<>
		<a href={link} target="_blank">
			<Image className={sm ? "imageLink-sm" : "imageLink"} src={src}/>
		</a>
	</>)
}