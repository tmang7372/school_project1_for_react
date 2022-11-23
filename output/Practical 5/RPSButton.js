export default function RPSButtons(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => props.onButtonPressed("Rock")
  }, "Rock"), /*#__PURE__*/React.createElement("button", {
    onClick: () => props.onButtonPressed("Paper")
  }, "Paper"), /*#__PURE__*/React.createElement("button", {
    onClick: () => props.onButtonPressed("Scissors")
  }, "Scissors"));
}