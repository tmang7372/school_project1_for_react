import RPSButton from "./RPSButton";

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
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
                 records={props.records.filter((record) => record.move === move)} />
    ))}
    </div>  ) 
}
