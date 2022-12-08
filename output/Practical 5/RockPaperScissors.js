import RPSButtons from "./RPSButtons.js";
import RPSRecords from "./RPSRecords.js";
import RPSInput from "./RBSInput.js";
import recordsReducer from "../Practical 7/RecordsReducer.js";
import { IsEmojiContext } from '../Practical 7/IsEmojiContext.js';
let records = [];
export const IsRecordContext = React.createContext({
  records
});
export default function RockPaperScissors(props) {
  const [isEmoji, setIsEmoji] = React.useState(false);
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  // const [records, setRecords] = React.useState([]);

  const record = records;
  return /*#__PURE__*/React.createElement(IsEmojiContext.Provider, {
    value: isEmoji
  }, /*#__PURE__*/React.createElement(IsRecordContext.Provider, {
    value: record
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Play rock-paper-scissors with me!"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setIsEmoji(!isEmoji);
    }
  }, "Toggle Emoji"), /*#__PURE__*/React.createElement(RPSButtons, {
    onButtonPressed: move => dispatch({
      name: 'add',
      move: move
    })
    /*records={records}*/
  }), /*#__PURE__*/React.createElement(RPSInput, {
    onAdd: record => dispatch({
      name: 'force add',
      record: record
    })
  }), /*#__PURE__*/React.createElement(RPSRecords
  /*records = {records}*/, {
    onHide: index => {
      // Dispatch instead of setRecords
      dispatch({
        name: 'remove',
        index: index
      });
    }
  }))));
}