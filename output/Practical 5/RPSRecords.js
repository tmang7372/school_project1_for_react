import recordsReducer from "../Practical 7/RecordsReducer.js";
import { IsEmojiContext, emoji } from '../Practical 7/IsEmojiContext.js';
import { IsRecordContext } from "./RockPaperScissors.js";
export default function RPSRecords(props) {
  const record = React.useContext(IsRecordContext);
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  const isEmoji = React.useContext(IsEmojiContext);
  let total = 0;
  let percent = 0;
  if (record.length == 0) {
    props.percentage = 0;
  } else {
    for (let i = 0; i < record.length; i++) {
      if (record[i].result == "Win") {
        total = total + 1;
      }
      percent = total / record.length * 100;
    }
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Rounds:", /*#__PURE__*/React.createElement("span", null, "Win % ", percent.toFixed(2), "%")), /*#__PURE__*/React.createElement("ol", null, record.map(function (record, index) {
    return /*#__PURE__*/React.createElement("li", null, record.result, " (", isEmoji ? emoji[record.move] : record.move, ") ", /*#__PURE__*/React.createElement("button", {
      onClick: () => props.onHide(index)
    }, "Delete"));
  })));
}