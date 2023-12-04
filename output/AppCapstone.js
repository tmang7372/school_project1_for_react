import Member from "./AssignmentOne/Member.js";
import { Provider } from 'react-redux';
import storage from "./AssignmentTwo/storage.js";
function App(props) {
  const [movieData, setmovieData] = React.useState("");
  function getdata() {
    fetch('http://127.0.0.1:3000/movie', {
      mode: 'cors'
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      setmovieData(data);
    });
  }
  return /*#__PURE__*/React.createElement("div", null, getdata(), /*#__PURE__*/React.createElement(Member, {
    movieData: movieData
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));