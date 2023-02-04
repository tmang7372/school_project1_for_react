/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
import { showSelectGenre } from "../AssignmentTwo/recordSlice";
import { useDispatch } from "react-redux";

export default function ChooseGenre({ setgenreHandler }) {
  //Set the genre of the useState
  const [genre, setgenre] = React.useState();

  //Set the value of the genre
  const handleChangeOne = (event) => {
    setgenre(event.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <h3 style={{ marginLeft: "520px" }}>Filter movie base on genre</h3>
      <label style={{ marginLeft: "450px" }}>Fantasy</label>
      <input
        type={"radio"}
        name={"Genre"}
        value={"Fantasy"}
        style={{ marginRight: "10px" }}
        onChange={handleChangeOne}
      />
      <label>Mistery</label>
      <input
        type={"radio"}
        name={"Genre"}
        value={"Mistery"}
        style={{ marginRight: "10px" }}
        onChange={handleChangeOne}
      />
      <label>Drama</label>
      <input
        type={"radio"}
        name={"Genre"}
        value={"Drama"}
        style={{ marginRight: "10px" }}
        onChange={handleChangeOne}
      />
      <label>Comedy</label>
      <input
        type={"radio"}
        name={"Genre"}
        value={"Comedy"}
        onChange={handleChangeOne}
        style={{ marginRight: "10px" }}
      />
      <label>Action</label>
      <input
        type={"radio"}
        name={"Genre"}
        value={"Action"}
        onChange={handleChangeOne}
        style={{ marginRight: "10px" }}
      />
      <br></br><br></br>
      <input
        type={"submit"}
        value={"Submit Genre"}
        style={{
          marginLeft: "580px",
          marginTop: "5px",
          border: "2px solid #696969",
        }}
        onClick={(event) => dispatch(showSelectGenre(genre))}
      ></input>
    </div>
  );
}
