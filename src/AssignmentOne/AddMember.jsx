/*
 Assignment 1
 Ang Theow Meng
 P7339041
 */
export default function AddMember({ onSubmitHandler, ondeleteHandler }) {
  
  //Set the useState of movieid, nameofmovie, displaympvie, description, genre, leadActor, rating and language
  const [idmovie, setidmovie] = React.useState("");
  const [nameofmovie, setnameofmovie] = React.useState("");
  const [displaymovie, setdisplaymovie] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [genre, setgenre] = React.useState("");
  const [leadActor, setleadActor] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [language, setlanguage] = React.useState("");
  
  //Set the value of the movieid
  function onChangeId(event) {
    setidmovie(event.target.value);
  }
  
  //Set the value of the name of movie
  function onChangeName(event) {
    setnameofmovie(event.target.value);
  }
  
  //Set the value of the display
  function onChangeDisplay(event) {
    setdisplaymovie(event.target.value);
  }
  
  //Set the value of the actor
  function onChangeActor(event) {
    setleadActor(event.target.value.split(","));
  }
  
  //Set the value of the description
  function onChangeDescription(event) {
    setdescription(event.target.value);
  }
  
  //Set the value of the genre
  function onChangeGenre(event) {
    setgenre(event.target.value);
  }
  
  //Set the value of the rating
  function onChangeRating(event) {
    setRating(event.target.value);
  }
  
  //Set the value of the language
  function onChangeLanguage(event) {
    setlanguage(event.target.value);
  }
  
  //Save the movie object to the movie list
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      "id": idmovie,
      "movie name": nameofmovie,
      "display": displaymovie,
      "description": description,
      "genre": genre,
      "lead actor": leadActor,
      "rating": rating,
      "language": language,
    };
    onSubmitHandler(val);
    clearState();
  };
  
  //Clear the value
  const onClearHandler = (event) => {
    document.getElementById("clearID").value = "";
    document.getElementById("clearMovieName").value = "";
    document.getElementById("clearDisplay").value = "";
    document.getElementById("clearDescription").value = "";
    document.getElementById("clearGenre").value = "";
    document.getElementById("clearActor").value = "";
  };

  //Clear the state
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

    return (
        <div>
          <div
            style={{
              width: "520px",
              height: "520px",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              border: "1px solid #93e6f1",
              boxShadow: "2px 2px #93e6f1",
              borderRadius: "5px",
            }}
          >
            <form>
              <div
                style={{
                  width: "500px",
                  height: "500px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginRight: "auto",
                  marginLeft: "auto",
                  borderRadius: "5px",
                  backgroundColor: "#93e6f1",
                }}
              >
                <h1
                  style={{
                    color: "#1bb8cc",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  Input Movie Data
                </h1>
                <label
                  style={{
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    color: "#19a8bb",
                    fontWeight: "bold",
                  }}
                >
                  Please key in the Id
                </label>
                <input
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "5px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  type={"text"}
                  id={"clearID"}
                  maxLength={"10"}
                  onChange={onChangeId}
                  placeholder={"Please key in the Id"}
                ></input>
                <label
                  style={{
                    clear: "left",
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                    color: "#19a8bb",
                    fontWeight: "bold",
                  }}
                >
                  Movie Names
                </label>
                <input
                  id="clearMovieName"
                  onChange={onChangeName}
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  type={"text"}
                  maxLength={"100"}
                  placeholder={"Movies Names"}
                  name={"moviesName"}
                ></input>
                <label
                  style={{
                    clear: "left",
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                    color: "#19a8bb",
                    fontWeight: "bold",
                  }}
                >
                  Do you want to display
                </label>
                <input
                  id={"clearDisplay"}
                  onChange={onChangeDisplay}
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "2px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  type={"type"}
                  maxLength={"100"}
                  placeholder={"True or False"}
                  name={"trueorfalsename"}
                ></input>
                <label
                  style={{
                    clear: "left",
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                    verticalAlign: "top",
                    color: "#19a8bb",
                    fontWeight: "bold",
                  }}
                >
                  Description of movies
                </label>
                <textarea
                  id={"clearDescription"}
                  onChange={onChangeDescription}
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "2px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  rows={"10"}
                  cols={"20"}
                ></textarea>
                <label
                  style={{
                    clear: "left",
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                    color: "#19a8bb",
                    fontWeight: "bold",
                  }}
                >
                  Genre
                </label>
                <input
                  id={"clearGenre"}
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "2px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  type={"text"}
                  onChange={onChangeGenre}
                  placeholder={"Input your Genre"}
                  maxLength={"10"}
                ></input>
                <label
                  style={{
                    clear: "left",
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                    color: "#19a8bb",
                    fontWeight: "bold",
                  }}
                >
                  Type in the Actors
                </label>
                <input
                  id="clearActor"
                  onChange={onChangeActor}
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  type={"text"}
                  maxLength={"500"}
                  placeholder={"Name of Actor"}
                  name={"actorName"}
                ></input>
                <label
                  style={{
                    clear: "left",
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                    color: "#19a8bb",
                    fontWeight: "bold",
                  }}
                >
                  Rating
                </label>
                <input
                  onChange={onChangeRating}
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  type={"text"}
                  maxLength={"10"}
                  placeholder={"Rating"}
                  name={"movieRating"}
                ></input>
                <label
                  style={{
                    clear: "left",
                    float: "left",
                    width: "180px",
                    marginLeft: "30px",
                    marginBottom:  "10px",
                    fontWeight: "bold",
                    color: "#19a8bb",
                  }}
                >
                  Language
                </label>
                <input
                  onChange={onChangeLanguage}
                  style={{
                    float: "left",
                    width: "200px",
                    marginLeft: "5px",
                    marginBottom: "10px",
                    border: "1.5px solid #1ecae0",
                    borderRadius: "5px",
                  }}
                  type={"text"}
                  maxLength={"20"}
                  placeholder={"Language"}
                  name={"movieLanguage"}
                ></input>
                <button
                  style={{
                    clear: "left",
                    float: "left",
                    
                    marginLeft: "160px",
                    color: "#19a8bb",
                    backgroundColor: "#fcf633", 
                    border: "1px solid #fbf50f",
                    borderRadius: "2px"
                  }}
                  value= {'Submit Button'}
                  onClick={transferValue}
                  id={"submitButton"}
                >
                  Submit Button
                </button>
                <button
                  style={{ float: "left", marginLeft: "10px", color: "#19a8bb",
                           backgroundColor: "#fcf633", border: "1px solid #fbf50f",
                           borderRadius: "2px" }}
                  id="clearValueButton"
                  onClick={onClearHandler}
                >
                  Clear Inputs
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    