import { TitleLi } from "./TitleLi.js";
import Hello from "../Practical 2/Hello.js";
function Age(props) {
  const [isHidden, setIsHidden] = React.useState(true);
  const emoji = props.value >= 18 ? ' ' : '🔞';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: "Age",
    text: emoji + props.value,
    isHidden: isHidden,
    onMouseEnter: function () {
      setIsHidden(false);
    },
    onMouseLeave: function () {
      setIsHidden(true);
    }
  }));
}
export default Age;