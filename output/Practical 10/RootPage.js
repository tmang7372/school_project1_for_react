import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import storage from "../Practical 9/storage.js";
export default function RootPage(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: '/'
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: 'about'
  }, "About")))), /*#__PURE__*/React.createElement(Provider, {
    store: storage
  }, /*#__PURE__*/React.createElement(Outlet, null)));
}