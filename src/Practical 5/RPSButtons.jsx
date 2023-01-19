import RPSButton from "./RPSButton";
// import {IsRecordContext} from './RockPaperScissors.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Practical 9/recordSlice'

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
  // const records = React.useContext(IsRecordContext);
  const records = useSelector(function (store) {
    return store.record.value;
});
const dispatch = useDispatch();

  // return (
  //   <div>
  //     <button onClick = {()=>props.onButtonPressed("Rock")}>Rock</button>
  //       <button onClick= {()=>props.onButtonPressed("Paper")}>Paper</button>
  //       <button onClick = {()=>props.onButtonPressed("Scissors")}>Scissors</button>
  //    </div>
  // );
  return (
    <div>
      {moves.map(function(move, index){ 
       return(
        <RPSButton 
                 key = {index}
                 //onClick={() => props.onButtonPressed(move)} 
                 //move={move} 
                 //</div>records={records.filter((record) => record.move === move)} 
                 records={records.filter((record)=> record.move === move)}
                        move={move}
                        onClick={()=>
                            // dispatch instead of props.onButtonPressed
                            dispatch(add(move))}>
                  </RPSButton>
    )})}
    </div>  ) 
}
