import { IsEmojiContext, emoji } from '../Practical 7/IsEmojiContext.js'
// import {IsRecordContext} from './RockPaperScissors.jsx';
import { useSelector } from 'react-redux';

export default function RBSButton(props){
      const [isHovered, setIsHovered] = React.useState(false);
      const isEmoji = React.useContext(IsEmojiContext);
      // const records = React.useContext(IsRecordContext);
      const record = useSelector(function(store) {
        return store.record.value;
      });

    const winCount = record.filter((record)=> (record.result === "Win") && (record.move === props.move)).length;
    const totalCount = record.filter((record)=> (record.move === props.move)).length;
    const percentage = totalCount > 0 ? (winCount / totalCount * 100) : 0.00;   
	
      	
      return (
        <button onClick={props.onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
               {isEmoji ? emoji[props.move] : props.move} {isHovered && `(${percentage.toFixed(2)}%)`}
        </button>
      )
}