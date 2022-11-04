export default function Hobby(props) {
  return /*#__PURE__*/React.createElement("li", null, props.emoji, props.title);
}
export function TitleLi(props) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, props.title), " : ", !props.isHidden && props.text);
}