export default function RPSRecords(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Rounds:"), /*#__PURE__*/React.createElement("ol", null, props.records.map(function (record) {
    return /*#__PURE__*/React.createElement("li", null, record.result, " (", record.move, ")");
  })));
}