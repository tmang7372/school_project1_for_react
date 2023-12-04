import recordsReducer from "../Practical 7/RecordsReducer.js";
import { IsEmojiContext, emoji } from '../Practical 7/IsEmojiContext.js';
// import {IsRecordContext} from './RockPaperScissors';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from "../Practical 9/recordSlice.js";
import { Link } from 'react-router-dom';
export default function RPSRecords(props) {
  // const record = React.useContext(IsRecordContext);
  // const [records, dispatch] = React.useReducer(recordsReducer, []);
  const isEmoji = React.useContext(IsEmojiContext);
  const record = useSelector(function (store) {
    return store.record.value;
  });
  const dispatch = useDispatch();
  const winCount = record.filter(record => record.result === "Win" && record.move === props.move).length;
  const totalCount = record.filter(record => record.move === props.move).length;
  const percentage = totalCount > 0 ? winCount / totalCount * 100 : 0.00;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Rounds:", /*#__PURE__*/React.createElement("span", null, "Win % ", percentage.toFixed(2), "%")), /*#__PURE__*/React.createElement("ol", null, record.map(function (record, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, record.result, " (", isEmoji ? emoji[record.move] : record.move, ") ", /*#__PURE__*/React.createElement("button", {
      onClick: () => dispatch(remove(index))
    }, "Delete"), /*#__PURE__*/React.createElement(Link, {
      to: `move/${index + 1}`
    }, "Details"));
  })));
}