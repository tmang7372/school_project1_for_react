import RPSButton from "./RPSButton.js";
const moves = ['Rock', 'Paper', 'Scissors'];
export default function RPSButtons(props) {
  // return (
  //   <div>
  //     <button onClick = {()=>props.onButtonPressed("Rock")}>Rock</button>
  //       <button onClick= {()=>props.onButtonPressed("Paper")}>Paper</button>
  //       <button onClick = {()=>props.onButtonPressed("Scissors")}>Scissors</button>
  //    </div>
  // );
  return /*#__PURE__*/React.createElement("div", null, moves.map(move => /*#__PURE__*/React.createElement(RPSButton, {
    onClick: () => props.onButtonPressed(move),
    move: move,
    records: props.records.filter(record => record.move === move)
  })));
}