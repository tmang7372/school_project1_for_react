import { TitleLi } from "./Hobby";
import Age from "./Age";

export default function Hello() {
    const hobbies = [
        { title: 'Swim',emoji: '🏊'}, 
        { title: 'Run' ,emoji: '🏃'},
        { title: 'Golf', emoji: '🏌'},
        ]
    
    return (
    <div>
    <h1>Hello, this is a page about me!</h1>
    <ol>
        <TitleLi title={'Name'} text={'Jeremiah Ang'} />
        <Age value={2} />
        <li> Hobbies:
            <ol>
             {hobbies.map((hobby)=>{
                return <li>{hobby.emoji} {hobby.title}</li>
             })}
             
             
            </ol>
        </li>
    </ol>
    
    
    </div>
    );
}
