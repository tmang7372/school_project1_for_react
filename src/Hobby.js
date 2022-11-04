
export default function Hobby (props) {
	return <li>{props.emoji}{props.title}</li>
}

export function TitleLi(props){
    return <li><b>{props.title}</b> : {!props.isHidden && props.text}</li>
}