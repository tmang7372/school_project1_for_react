import Age from "../Practical 4/Age.js";
import Hello from "../Practical 2/Hello.js";
import HobbyList from "../Practical 10/HobbyList.js";
import { TitleLi } from "../Practical 4/TitleLi.js";
export default function AboutMe(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hello, null), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: "name",
    text: "Jeremiah Ang"
  }), /*#__PURE__*/React.createElement(Age, {
    value: 17
  }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Hobbies:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(HobbyList, {
    hobbies: [{
      title: 'Swim',
      emoji: '🏊'
    }, {
      title: 'Run'
    }, {
      title: 'Game',
      emoji: '🎮'
    }]
  })))));
}