import RPSButtons from './RPSButton';
import RPSRecords from './RPSRecords'

export default function RockPaperScissors(props) {
  const [records, setRecords] = React.useState([]);
  return (
    <div>
      <h1>Play rock-paper-scissors with me!</h1>
      <RPSButtons onButtonPressed = {(move) => setRecords([...records, { result: "Win", move: move}])}/>
      <RPSRecords records = {records}/>
    </div>
  );
}
