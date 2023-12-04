/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */import { showSelectGenre } from "../AssignmentTwo/recordSlice.js";
import { useDispatch } from "react-redux";
export default function ChooseGenre({
  setgenreHandler
}) {
  //Set the genre of the useState
  const [genre, setgenre] = React.useState();

  //Set the value of the genre
  const handleChangeOne = event => {
    setgenre(event.target.value);
  };
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginLeft: "520px"
    }
  }, "Filter movie base on genre"), /*#__PURE__*/React.createElement("label", {
    style: {
      marginLeft: "450px"
    }
  }, "Fantasy"), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "Genre",
    value: "Fantasy",
    style: {
      marginRight: "10px"
    },
    onChange: handleChangeOne
  }), /*#__PURE__*/React.createElement("label", null, "Mistery"), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "Genre",
    value: "Mistery",
    style: {
      marginRight: "10px"
    },
    onChange: handleChangeOne
  }), /*#__PURE__*/React.createElement("label", null, "Drama"), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "Genre",
    value: "Drama",
    style: {
      marginRight: "10px"
    },
    onChange: handleChangeOne
  }), /*#__PURE__*/React.createElement("label", null, "Comedy"), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "Genre",
    value: "Comedy",
    onChange: handleChangeOne,
    style: {
      marginRight: "10px"
    }
  }), /*#__PURE__*/React.createElement("label", null, "Action"), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "Genre",
    value: "Action",
    onChange: handleChangeOne,
    style: {
      marginRight: "10px"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Submit Genre",
    style: {
      marginLeft: "580px",
      marginTop: "5px",
      border: "2px solid #696969"
    },
    onClick: event => dispatch(showSelectGenre(genre))
  }));
}