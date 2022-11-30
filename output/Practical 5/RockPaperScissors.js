import RPSButtons from "./RPSButtons.js";
import RPSRecords from "./RPSRecords.js";
import RPSInput from "./RBSInput.js";
export default function RockPaperScissors(props) {
  const [records, setRecords] = React.useState([]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Play rock-paper-scissors with me!"), /*#__PURE__*/React.createElement(RPSButtons, {
    onButtonPressed: move => setRecords([...records, {
      result: "Win",
      move: move
    }]),
    records: records
  }), /*#__PURE__*/React.createElement(RPSInput, {
    onAdd: record => setRecords([...records, record])
  }), /*#__PURE__*/React.createElement(RPSRecords, {
    records: records
  }));
}