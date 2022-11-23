import RPSButtons from './RPSButton';
import RPSRecords from './RPSRecords'

export default function RockPaperScissors(props) {
  const [records, setRecords] = React.useState([]);
  return (
    <div>
      <h1>Play rock-paper-scissors with me!</h1>
      <RPSButtons onButtonPressed = {(move) => {
        const RandomNumber = Math.floor(Math.random()*3);
        let result;
        RandomNumber === 0 ? result ="Win" : RandomNumber === 1 ? result = "Lose": result = "Tie";
        setRecords([...records, { result: result, move: move}])}}/>
      <RPSRecords records = {records}/>
    </div>
  );
}
