import { useDispatch } from "react-redux";
import { forceAdd } from "../Practical 9/recordSlice";

export default function RPSInput(props) {
    const [selectedMove, setSelectedMove] = React.useState('Rock');
    const [isWin, setIsWin] = React.useState(false);
    const dispatch = useDispatch()

    return (
      <div>
          <select value={selectedMove} onChange={(e) => setSelectedMove(e.target.value)}>
              <option value="Rock">Rock</option>
              <option value="Paper">Paper</option>
              <option value="Scissors">Scissors</option>
          </select>
          <input type="checkbox" checked={isWin} onChange={(e) => setIsWin(e.target.checked)}  /> Win?
          <button onClick={() => {
                                  // props.onAdd({move: selectedMove, result: isWin ? "Win" : "Lose" })
                                  dispatch(forceAdd({move: selectedMove, result: isWin ? "Win" : "Lose" }))}}>Add</button>
      </div>
    )
  }