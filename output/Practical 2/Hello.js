import { TitleLi } from "../Practical 3/Hobby.js";
import Age from "../Practical 4/Age.js";
export default function Hello() {
  const hobbies = [{
    title: 'Swim',
    emoji: '🏊'
  }, {
    title: 'Run',
    emoji: '🏃'
  }, {
    title: 'Golf',
    emoji: '🏌'
  }, {
    title: 'Soccer',
    emoji: null
  }, {
    title: 'Tennis'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, this is a page about me!"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: 'Name',
    text: 'Jeremiah Ang'
  }), /*#__PURE__*/React.createElement(Age, {
    value: 21
  }), /*#__PURE__*/React.createElement("li", null, " Hobbies:", /*#__PURE__*/React.createElement("ol", null, hobbies.map(hobby => {
    if (hobby.emoji != null || hobby.emoji != undefined) {
      return /*#__PURE__*/React.createElement("li", null, hobby.emoji, " ", hobby.title);
    }
  })))));
}