import recordsReducer from "../Practical 7/RecordsReducer";
import { IsEmojiContext, emoji } from '../Practical 7/IsEmojiContext.js';
// import {IsRecordContext} from './RockPaperScissors';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Practical 9/recordSlice'  
import { Link } from 'react-router-dom';
export default function RPSRecords(props) {
	
  // const record = React.useContext(IsRecordContext);
  // const [records, dispatch] = React.useReducer(recordsReducer, []);
  const isEmoji = React.useContext(IsEmojiContext);
  
  const record = useSelector(function(store) {
    return store.record.value;
  });
  
  const dispatch = useDispatch();

  const winCount = record.filter((record)=> (record.result === "Win") && (record.move === props.move)).length;
  const totalCount = record.filter((record)=> (record.move === props.move)).length;
  const percentage = totalCount > 0 ? (winCount / totalCount * 100) : 0.00;   
	
  return (
    <div>
      <p>Rounds:<span>Win % {percentage.toFixed(2)}%</span></p>
      <ol>
        {record.map(function (record,index) {
           return <li key = {index}>
            {record.result} ({isEmoji ? emoji[record.move] : record.move}) <button onClick={()=>dispatch(remove(index))}>Delete</button>{/*props.onHide(index)*/}
            <Link to={`move/${index + 1}`}>Details</Link>
          </li>;
        })}
      </ol>
    </div>
  );
}
