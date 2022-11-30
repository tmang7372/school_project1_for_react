import RPSButtons from './RPSButtons';
import RPSRecords from './RPSRecords'
import RPSInput from './RBSInput';
export default function RockPaperScissors(props) {
  const [records, setRecords] = React.useState([]);
  return (
    <div>
      <h1>Play rock-paper-scissors with me!</h1>
      {/* <RPSButtons onButtonPressed = {(move) => {
        const RandomNumber = Math.floor(Math.random()*3);
        let result;
        RandomNumber === 0 ? result ="Win" : RandomNumber === 1 ? result = "Lose": result = "Tie";
        setRecords([...records, { result: result, move: move}])}}/> */}
      <RPSButtons onButtonPressed={(move) => setRecords([...records, { result: "Win", move: move }])} records={records}/>
      <RPSInput onAdd={(record) => setRecords([...records, record])}/>
      <RPSRecords records = {records}/>
    </div>
  );
}
