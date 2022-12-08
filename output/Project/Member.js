export default function Member({
  data
}) {
  const tableRows = data => data.map((info, num) => {
    return info.display && /*#__PURE__*/React.createElement("tr", {
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
        textAlign: 'center'
      }
    }, info.display), /*#__PURE__*/React.createElement("td", {
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
  }, "Display"), /*#__PURE__*/React.createElement("th", {
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
  }, "Language"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Remove Items"), /*#__PURE__*/React.createElement("th", {
    style: {
      border: "2px solid #696969",
      color: 'white',
      backgroundColor: "black"
    }
  }, "Hide Items"))), /*#__PURE__*/React.createElement("tbody", null, tableRows(data))));
}