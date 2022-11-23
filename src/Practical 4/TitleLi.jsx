export function TitleLi(props){
    return <li onMouseEnter={function() { props.onMouseEnter(); }} onMouseLeave={function() { props.onMouseLeave(); }}><b>{props.title}</b> : {!props.isHidden && props.text}</li>
}