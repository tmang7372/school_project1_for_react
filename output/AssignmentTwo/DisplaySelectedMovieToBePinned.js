/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
import { useSelector, useDispatch } from 'react-redux';
import { showSelectedPinnedMovie } from "../AssignmentTwo/recordSlice.js";
export default function Member({
  movietobepinnedid,
  resetMoviesToBePinned
}) {
  // const [movieIdToBePinned,setmovieIdToBePinned] = React.useState([])

  const dispatch = useDispatch();

  // const id = useSelector(function(store) {
  //   return store.record.movieId;
  // }); 

  const records = useSelector(function (store) {
    return store.record.value;
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      marginTop: "50px",
      backgroundColor: "black",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      border: "2px solid #ea4915"
    }
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Id"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Description of Movies"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Genre"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    },
    colSpan: "2"
  }, "Actors"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Rating"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Language"))), /*#__PURE__*/React.createElement("tbody", null, records.map((info, num) => {
    return info.selecttobepinned && /*#__PURE__*/React.createElement("tr", {
      key: info.id
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: 'white',
        textAlign: 'center'
      }
    }, info.id), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: 'white',
        textAlign: 'center'
      }
    }, info['movie name']), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: 'white',
        textAlign: 'center',
        margin: '1px auto'
      }
    }, info.description), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: 'white'
      }
    }, info.genre), info['lead actor'].map(data => /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: 'white'
      }
    }, data)), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: 'white',
        textAlign: 'center'
      }
    }, info.rating), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: 'white',
        textAlign: 'center'
      }
    }, info.language));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "buttonSeparation",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      marginTop: "10px"
    },
    type: "button",
    value: "Show the Movie to be Pinned",
    onClick: () => dispatch(showSelectedPinnedMovie(movietobepinnedid))
  }), /*#__PURE__*/React.createElement("input", {
    type: "button",
    style: {
      marginLeft: "10px",
      marginTop: "10px"
    },
    value: "Reset the Movie to be Pinned",
    onClick: () => resetMoviesToBePinned()
  })));
}