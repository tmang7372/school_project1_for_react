export default function AddMember({
  onSubmitHandler,
  ondeleteHandler
}) {
  const [idmovie, setidmovie] = React.useState("");
  const [nameofmovie, setnameofmovie] = React.useState("");
  const [displaymovie, setdisplaymovie] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [genre, setgenre] = React.useState("");
  const [leadActor, setleadActor] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [language, setlanguage] = React.useState("");
  function onChangeId(event) {
    setidmovie(event.target.value);
  }
  function onChangeName(event) {
    setnameofmovie(event.target.value);
  }
  function onChangeDisplay(event) {
    setdisplaymovie(event.target.value);
  }
  function onChangeActor(event) {
    setleadActor(event.target.value.split(","));
  }
  function onChangeDescription(event) {
    setdescription(event.target.value);
  }
  function onChangeGenre(event) {
    setgenre(event.target.value);
  }
  function onChangeRating(event) {
    setRating(event.target.value);
  }
  function onChangeLanguage(event) {
    setlanguage(event.target.value);
  }
  const transferValue = event => {
    event.preventDefault();
    const val = {
      "id": idmovie,
      "movie name": nameofmovie,
      "display": displaymovie,
      "description": description,
      "genre": genre,
      "lead actor": leadActor,
      "rating": rating,
      "language": language
    };
    onSubmitHandler(val);
    clearState();
  };
  const onClearHandler = event => {
    document.getElementById("clearID").value = "";
    document.getElementById("clearMovieName").value = "";
    document.getElementById("clearDisplay").value = "";
    document.getElementById("clearDescription").value = "";
    document.getElementById("clearGenre").value = "";
    document.getElementById("clearActor").value = "";
  };
  const clearState = () => {
    setidmovie("");
    setnameofmovie("");
    setdisplaymovie("");
    setdescription("");
    setgenre("");
    setleadActor("");
    setRating("");
    setlanguage("");
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "520px",
      height: "520px",
      marginTop: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      border: "1px solid #93e6f1",
      boxShadow: "2px 2px #93e6f1",
      borderRadius: "5px"
    }
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "500px",
      height: "500px",
      marginTop: "10px",
      marginBottom: "10px",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "5px",
      backgroundColor: "#93e6f1"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#1bb8cc",
      textAlign: "center",
      marginTop: "10px"
    }
  }, "Input Movie Data"), /*#__PURE__*/React.createElement("label", {
    style: {
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginTop: "10px",
      marginBottom: "10px",
      color: "#19a8bb",
      fontWeight: "bold"
    }
  }, "Please key in the Id"), /*#__PURE__*/React.createElement("input", {
    style: {
      float: "left",
      width: "200px",
      marginLeft: "5px",
      marginTop: "10px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    type: "text",
    id: "clearID",
    maxLength: "10",
    onChange: onChangeId,
    placeholder: "Please key in the Id"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      clear: "left",
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginBottom: "10px",
      color: "#19a8bb",
      fontWeight: "bold"
    }
  }, "Movie Names"), /*#__PURE__*/React.createElement("input", {
    id: "clearMovieName",
    onChange: onChangeName,
    style: {
      float: "left",
      width: "200px",
      marginLeft: "5px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    type: "text",
    maxLength: "100",
    placeholder: "Movies Names",
    name: "moviesName"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      clear: "left",
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginBottom: "10px",
      color: "#19a8bb",
      fontWeight: "bold"
    }
  }, "Do you want to display"), /*#__PURE__*/React.createElement("input", {
    id: "clearDisplay",
    onChange: onChangeDisplay,
    style: {
      float: "left",
      width: "200px",
      marginLeft: "2px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    type: "type",
    maxLength: "100",
    placeholder: "True or False",
    name: "trueorfalsename"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      clear: "left",
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginBottom: "10px",
      verticalAlign: "top",
      color: "#19a8bb",
      fontWeight: "bold"
    }
  }, "Description of movies"), /*#__PURE__*/React.createElement("textarea", {
    id: "clearDescription",
    onChange: onChangeDescription,
    style: {
      float: "left",
      width: "200px",
      marginLeft: "2px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    rows: "10",
    cols: "20"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      clear: "left",
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginBottom: "10px",
      color: "#19a8bb",
      fontWeight: "bold"
    }
  }, "Genre"), /*#__PURE__*/React.createElement("input", {
    id: "clearGenre",
    style: {
      float: "left",
      width: "200px",
      marginLeft: "2px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    type: "text",
    onChange: onChangeGenre,
    placeholder: "Input your Genre",
    maxLength: "10"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      clear: "left",
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginBottom: "10px",
      color: "#19a8bb",
      fontWeight: "bold"
    }
  }, "Type in the Actors"), /*#__PURE__*/React.createElement("input", {
    id: "clearActor",
    onChange: onChangeActor,
    style: {
      float: "left",
      width: "200px",
      marginLeft: "5px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    type: "text",
    maxLength: "500",
    placeholder: "Name of Actor",
    name: "actorName"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      clear: "left",
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginBottom: "10px",
      color: "#19a8bb",
      fontWeight: "bold"
    }
  }, "Rating"), /*#__PURE__*/React.createElement("input", {
    onChange: onChangeRating,
    style: {
      float: "left",
      width: "200px",
      marginLeft: "5px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    type: "text",
    maxLength: "10",
    placeholder: "Rating",
    name: "movieRating"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      clear: "left",
      float: "left",
      width: "180px",
      marginLeft: "30px",
      marginBottom: "10px",
      fontWeight: "bold",
      color: "#19a8bb"
    }
  }, "Language"), /*#__PURE__*/React.createElement("input", {
    onChange: onChangeLanguage,
    style: {
      float: "left",
      width: "200px",
      marginLeft: "5px",
      marginBottom: "10px",
      border: "1.5px solid #1ecae0",
      borderRadius: "5px"
    },
    type: "text",
    maxLength: "20",
    placeholder: "Language",
    name: "movieLanguage"
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      clear: "left",
      float: "left",
      marginLeft: "160px",
      color: "#19a8bb",
      backgroundColor: "#fcf633",
      border: "1px solid #fbf50f",
      borderRadius: "2px"
    },
    value: 'Submit Button',
    onClick: transferValue,
    id: "submitButton"
  }, "Submit Button"), /*#__PURE__*/React.createElement("button", {
    style: {
      float: "left",
      marginLeft: "10px",
      color: "#19a8bb",
      backgroundColor: "#fcf633",
      border: "1px solid #fbf50f",
      borderRadius: "2px"
    },
    id: "clearValueButton",
    onClick: onClearHandler
  }, "Clear Inputs")))));
}