import RPSButton from "./RPSButton";
import {IsRecordContext} from './RockPaperScissors.jsx';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
  const records = React.useContext(IsRecordContext);
  // return (
  //   <div>
  //     <button onClick = {()=>props.onButtonPressed("Rock")}>Rock</button>
  //       <button onClick= {()=>props.onButtonPressed("Paper")}>Paper</button>
  //       <button onClick = {()=>props.onButtonPressed("Scissors")}>Scissors</button>
  //    </div>
  // );
  return (
    <div>
      {moves.map((move) => (
        <RPSButton 
                 onClick={() => props.onButtonPressed(move)} 
                 move={move} 
                 records={records.filter((record) => record.move === move)} >
                  </RPSButton>
    ))}
    </div>  ) 
}
