/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import storage from "../AssignmentTwo/storage.js";
export default function RootPage(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: '/'
  }, "Movie")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: 'genre'
  }, "Choose Genre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: 'addmember'
  }, "Add Member")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: 'pinnedmovie'
  }, "Pinned Movies")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: 'editmovie'
  }, "Edit Movies")))), /*#__PURE__*/React.createElement(Provider, {
    store: storage
  }, /*#__PURE__*/React.createElement(Outlet, null)));
}