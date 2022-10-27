export default function Hobby (props) {
	return <li>{props.emoji}{props.title}</li>
}

export function TitleLi(props){
    return <li>{props.title} : {props.text}</li>
}