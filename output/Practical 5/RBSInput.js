import { useDispatch } from "react-redux";
import { forceAdd } from "../Practical 9/recordSlice.js";
export default function RPSInput(props) {
  const [selectedMove, setSelectedMove] = React.useState('Rock');
  const [isWin, setIsWin] = React.useState(false);
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("select", {
    value: selectedMove,
    onChange: e => setSelectedMove(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "Rock"
  }, "Rock"), /*#__PURE__*/React.createElement("option", {
    value: "Paper"
  }, "Paper"), /*#__PURE__*/React.createElement("option", {
    value: "Scissors"
  }, "Scissors")), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isWin,
    onChange: e => setIsWin(e.target.checked)
  }), " Win?", /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      // props.onAdd({move: selectedMove, result: isWin ? "Win" : "Lose" })
      dispatch(forceAdd({
        move: selectedMove,
        result: isWin ? "Win" : "Lose"
      }));
    }
  }, "Add"));
}