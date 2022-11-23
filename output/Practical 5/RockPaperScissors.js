import RPSButtons from "./RPSButton.js";
import RPSRecords from "./RPSRecords.js";
export default function RockPaperScissors(props) {
  const [records, setRecords] = React.useState([]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Play rock-paper-scissors with me!"), /*#__PURE__*/React.createElement(RPSButtons, {
    onButtonPressed: move => setRecords([...records, {
      result: "Win",
      move: move
    }])
  }), /*#__PURE__*/React.createElement(RPSRecords, {
    records: records
  }));
}