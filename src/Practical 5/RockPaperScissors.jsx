import RPSButtons from './RPSButtons';
import RPSRecords from './RPSRecords'
import RPSInput from './RBSInput';
import recordsReducer from '../Practical 7/RecordsReducer';
import { IsEmojiContext } from '../Practical 7/IsEmojiContext.js';

let records =[];
export const IsRecordContext = React.createContext({records});

export default function RockPaperScissors(props) {
  
  const [isEmoji, setIsEmoji] = React.useState(false);
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  // const [records, setRecords] = React.useState([]);
  
  const record = records
  return (
    <IsEmojiContext.Provider value={isEmoji}>
    <IsRecordContext.Provider value={record}>
    <div>
      <h1>Play rock-paper-scissors with me!</h1>
      {/* <RPSButtons onButtonPressed = {(move) => {
        const RandomNumber = Math.floor(Math.random()*3);
        let result;
        RandomNumber === 0 ? result ="Win" : RandomNumber === 1 ? result = "Lose": result = "Tie";
        setRecords([...records, { result: result, move: move}])}}/> */}
      {/* <RPSButtons onButtonPressed={(move) => setRecords([...records, { result: "Win", move: move }])} records={records}/> */}
      <button onClick={function() { setIsEmoji(!isEmoji); }}>Toggle Emoji</button>
      <RPSButtons onButtonPressed={(move) => dispatch({name: 'add', move: move})}
       /*records={records}*//>
      {/* <RPSInput onAdd={(record) => setRecords([...records, record])}/> */}
      <RPSInput onAdd={(record) => dispatch({ name: 'force add', record: record})}/>
      <RPSRecords 
        /*records = {records}*/ 
        onHide={(index) => {
      	  // Dispatch instead of setRecords
          dispatch({ name: 'remove', index: index });}}/>
    </div>
    </IsRecordContext.Provider>
    </IsEmojiContext.Provider>
  );
}
