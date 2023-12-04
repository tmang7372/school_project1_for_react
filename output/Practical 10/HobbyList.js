import Hobby from "../Practical 3/Hobby.js";
export default function HobbyList(props) {
  return props.hobbies.map(hobby => {
    return /*#__PURE__*/React.createElement(Hobby, {
      emoji: hobby.emoji,
      title: hobby.title
    });
  });
}