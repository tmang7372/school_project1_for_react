import Hobby from "../Practical 3/Hobby"

export default function HobbyList(props){
    return(
        props.hobbies.map((hobby)=>{
            return <Hobby emoji={hobby.emoji} title={hobby.title}/>
        })
        
    )
}