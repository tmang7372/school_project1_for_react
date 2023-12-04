/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */import { showSelectMovieForEdit, saveMovieAfterEdit, saveMovieChangeDescription, saveMovieChangeGenre, saveMovieChangeLeadActor, saveMovieChangeRating, saveMovieChangeLanguage, saveMovieChangeName } from "./recordSlice.js";
import { useSelector, useDispatch } from "react-redux";
export default function DisplayChooseMovie(props) {
  const records = useSelector(function (store) {
    return store.record.value;
  });
  const dispatch = useDispatch();
  const [description, setdescription] = React.useState();
  const tableRows = records =>
  //Display the movie list in a table
  records.map((info, num) => {
    return info.displayOneMovie && /*#__PURE__*/React.createElement("tr", {
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
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "changeMovieName",
      defaultValue: info['movie name'],
      onChange: event => dispatch(saveMovieChangeName({
        id: info.id,
        "movie name": event.target.value
      }))
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center",
        margin: "1px auto"
      }
    }, " ", /*#__PURE__*/React.createElement("textarea", {
      id: "changeMovieDescription",
      rows: "10",
      cols: "20",
      defaultValue: info.description,
      onChange: event => dispatch(saveMovieChangeDescription({
        id: info.id,
        description: event.target.value
      }))
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white"
      }
    }, " ", /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "changeMovieGenre",
      defaultValue: info.genre,
      onChange: event => dispatch(saveMovieChangeGenre({
        id: info.id,
        genre: event.target.value
      }))
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "changeLeadActor",
      defaultValue: info["lead actor"],
      onChange: event => dispatch(saveMovieChangeLeadActor({
        id: info.id,
        "lead actor": event.target.value
      }))
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "changeRating",
      defaultValue: info.rating,
      onChange: event => dispatch(saveMovieChangeRating({
        id: info.id,
        "rating": event.target.value
      }))
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        border: "2px solid #696969",
        color: "white",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "changeMovieLanguage",
      defaultValue: info.language,
      onChange: event => dispatch(saveMovieChangeLanguage({
        id: info.id,
        "language": event.target.value
      }))
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
  }, /*#__PURE__*/React.createElement("tr", {
    key: 0
  }, /*#__PURE__*/React.createElement("th", {
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
    }
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
  }, "Language"))), /*#__PURE__*/React.createElement("tbody", null, tableRows(records))));
}