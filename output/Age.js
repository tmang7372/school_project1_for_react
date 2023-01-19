import { TitleLi } from "./Hobby.js";
import Hello from "./Hello.js";
function Age(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: "Age",
    text: (props.value >= 18 ? "" : "🔞") + props.value,
    isHidden: false
  }));
}
export default Age;