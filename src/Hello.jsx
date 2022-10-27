import Hobby from "./Hobby";
import { TitleLi } from "./Hobby";

export default function Hello() {
    return (
    <div>
    <h1>Hello, this is a page about me!</h1>
    <ol>
        <TitleLi title={'Name'} text={'Jeremiah Ang'} />
        <TitleLi title={'Age'}  text={18} />
        <li> Hobbies:</li>
        <li>
            <ol>
             <Hobby title="Swim" emoji={<span>&#127946;</span>} />
              <Hobby title="Run" emoji={<span>&#128007;</span>}/>
              <Hobby title="Game" emoji={<span>&#128013;</span>}/>
            </ol>
        </li>
    </ol>
    
    
    </div>
    );
}
