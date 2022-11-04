import { TitleLi } from "./Hobby";
import Age from "./Age";

export default function Hello() {
    const hobbies = [
        { title: 'Swim',emoji: '🏊'}, 
        { title: 'Run' ,emoji: '🏃'},
        { title: 'Golf', emoji: '🏌'},
        { title: 'Soccer',emoji: null},
        { title: 'Tennis'}
        ]
    
    return (
    <div>
    <h1>Hello, this is a page about me!</h1>
    <ol>
        <TitleLi title={'Name'} text={'Jeremiah Ang'} />
        <Age value={2} />
        <li> Hobbies:
            <ol>
            {/* {hobbies.filter((hobbyItem)=> ((hobbyItem.emoji != null) || (hobbyItem.emoji != undefined)))                  */}
            {/* .map((hobby) => {  */}
               {/* return <li>{hobby.emoji} {hobby.title}</li>  */}
              {/* })}   */}
              { hobbies.map((hobby)=>{
                if((hobby.emoji!=null) || (hobby.emoji != undefined)){
                    return <li>{hobby.emoji} {hobby.title}</li>
                }
              })}
            </ol>
        </li>
    </ol>
    </div>
    )
}
