import recordsReducer from "../Practical 7/RecordsReducer";
import { IsEmojiContext, emoji } from '../Practical 7/IsEmojiContext.js';
import {IsRecordContext} from './RockPaperScissors';

export default function RPSRecords(props) {
	
  const record = React.useContext(IsRecordContext);
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  const isEmoji = React.useContext(IsEmojiContext);

  let total = 0;
    let percent = 0;
    if(record.length == 0 ){
        props.percentage = 0;
    }else {
       
		for(let i=0;i<record.length;i++){
         
		if(record[i].result=="Win"){
	        total = total+1;
    }
        percent = (total/record.length*100)
        
    }} 
	
  return (
    <div>
      <p>Rounds:<span>Win % {percent.toFixed(2)}%</span></p>
      <ol>
        {record.map(function (record,index) {
           return <li>
            {record.result} ({isEmoji ? emoji[record.move] : record.move}) <button onClick={()=>props.onHide(index)}>Delete</button>
          </li>;
        })}
      </ol>
    </div>
  );
}
