import Hello from "./Practical 2/Hello.js";
import RockPaperScissors from "./Practical 5/RockPaperScissors.js";
import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
import RootPage from "./Practical 10/RootPage.js";
import AboutMe from "./Practical 10/AboutMe.js";
import MovePage from "./Practical 10/MovePage.js";
const router = createHashRouter([{
  path: '/',
  element: /*#__PURE__*/React.createElement(RootPage, null),
  children: [{
    path: '/',
    element: /*#__PURE__*/React.createElement(RockPaperScissors, null)
  }, {
    path: '/move/:moveId',
    element: /*#__PURE__*/React.createElement(MovePage, null)
  }, {
    path: 'about',
    element: /*#__PURE__*/React.createElement(AboutMe, null)
  }]
}]);
function App(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RouterProvider, {
    router: router
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));