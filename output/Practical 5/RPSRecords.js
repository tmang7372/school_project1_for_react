export default function RPSRecords(props) {
  let total = 0;
  let percent = 0;
  if (props.records.length == 0) {
    props.percentage = 0;
  } else {
    for (let i = 0; i < props.records.length; i++) {
      if (props.records[i].result == "Win") {
        alert("inside if");
        total = total + 1;
      }
      percent = total / props.records.length * 100;
    }
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Rounds:", /*#__PURE__*/React.createElement("span", null, "Win % ", percent.toFixed(2), "%")), /*#__PURE__*/React.createElement("ol", null, props.records.map(function (record) {
    return /*#__PURE__*/React.createElement("li", null, record.result, " (", record.move, ")");
  })));
}