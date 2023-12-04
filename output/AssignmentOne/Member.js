/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, showHideItem, showSelectMovieForEdit, displayHideItem, resetShowGenre } from "../AssignmentTwo/recordSlice.js";
export default function Member({
  // data,
  // ondeleteHandler,
  // onChangeIdHandler,
  // checkHideShowHandler,
  // onClickShowItemHandler,
  showHideId,
  movietobepinnedid,
  selectToBePinnedHandler,
  resetMoviesToBePinned
}) {
  const dispatch = useDispatch();
  const records = useSelector(function (store) {
    return store.record.value;
  });
  const tableRows = data =>
  //Display the movie list in a table
  data.map((info, num) => {
    return info.display && /*#__PURE__*/React.createElement("tr", {
      key: info.id
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center"
      }
    }, info.id), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center"
      }
    }, info["movie name"]), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center",
        margin: "1px auto"
      }
    }, info.description), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white"
      }
    }, info.genre), info["lead actor"].map(data => /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white"
      }
    }, data)), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center"
      }
    }, info.rating), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center"
      }
    }, info.language), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      id: "deletemovies",
      name: "deletemovies",
      onChange: event => showHideId(event, info.id)
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      id: "showHideMovies",
      name: "showHideMovies",
      onChange: () => dispatch(displayHideItem(info.id)),
      onClick: event => {
        showHideId(event, info.id);
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      id: "itemtobeedited",
      name: "itemtobeedited",
      onClick: () => dispatch(showSelectMovieForEdit(info.id))
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      id: "itemtobepinned",
      name: "itemtobepinned",
      onClick: event => selectToBePinnedHandler(event, info.id)
    })));
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
      color: "white",
      backgroundColor: "black"
    }
  }, "Id"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Description of Movies"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Genre"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    },
    colSpan: "2"
  }, "Actors"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Rating"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Language"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Remove Items"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Hide Items"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Select Items To Be Editted"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: "white",
      backgroundColor: "black"
    }
  }, "Select Items To Be Pinned"))), /*#__PURE__*/React.createElement("tbody", null, tableRows(records))), /*#__PURE__*/React.createElement("div", {
    className: "buttonSeparation"
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      textAlign: "center",
      listStyleType: "none",
      listStylePosition: "inside"
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      border: "2px solid #696969",
      width: "89px",
      listStyle: "none",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "button",
    onClick: () => dispatch(deleteItem(movietobepinnedid)),
    value: "Delete Items"
  })), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "inline-block",
      border: "2px solid #696969",
      width: "135px",
      marginLeft: "10px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "Show the hide items",
    onClick: () => dispatch(showHideItem(movietobepinnedid))
  })), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "inline-block",
      border: "2px solid #696969",
      width: "135px",
      marginLeft: "10px",
      marginRight: "20px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "Reset Genre to Normal",
    onClick: () => dispatch(resetShowGenre())
  })), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "inline-block",
      border: "2px solid #696969",
      width: "135px",
      marginLeft: "10px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "button",
    value: "Reset Hide and Delete Id",
    onClick: () => resetMoviesToBePinned()
  })))));
}