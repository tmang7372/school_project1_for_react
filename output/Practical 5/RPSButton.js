import { IsEmojiContext, emoji } from '../Practical 7/IsEmojiContext.js';
import { IsRecordContext } from "./RockPaperScissors.js";
export default function RBSButton(props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const winCount = props.records.filter(record => record.result === "Win").length;
  const isEmoji = React.useContext(IsEmojiContext);
  const records = React.useContext(IsRecordContext);
  const totalCount = records.length;
  let percentage = 0.00;
  if (records.length === 0) {
    percentage = 0.00;
  } else {
    percentage = winCount / totalCount * 100;
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }, isEmoji ? emoji[props.move] : props.move, " ", isHovered && `(${percentage.toFixed(2)}%)`);
}