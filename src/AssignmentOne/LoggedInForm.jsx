/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
import { useSelector } from 'react-redux';

export default function LoggedInForm(props) {
  
  //Set the username, role and password of the state
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [role,setrole] = React.useState("")
  
  const records = useSelector(function(store) {
    return store.record.value;
  });

  return (
    <div
      style={{
        width: "280px",
        height: "290px",
        marginTop: "40px",
        marginLeft: "auto",
        marginRight: "auto",
        border: "1px solid #93e6f1",
        boxShadow: "2px 2px #93e6f1",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          width: "240px",
          height: "260px",
          marginTop: "10px",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: "5px",
          backgroundColor: "#93e6f1",
        }}
      >
        <form>
        <h1
          style={{
            textAlign: "center",
            color: "#1bb8cc",
            fontSize: "24px",
            paddingTop: "10px",
          }}
        >
          Logged In
        </h1>
        <label
          style={{
            float: "left",
            marginLeft: "10%",
            color: "#19a8bb",
          }}
        >
          Please enter Your Username
        </label>
        <input
          style={{
            clear: "left",
            float: "left",
            width: "180px",
            marginLeft: "10%",
            marginTop: "4px",
            marginBottom: "8px",
            border: "1.5px solid #1ecae0",
            borderRadius: "5px",
          }}
          type={"text"}
          onChange={(event) => setusername(event.target.value)}
        ></input>
        <label
          style={{
            clear: "left",
            float: "left",
            marginLeft: "10%",
            marginTop: "8px",
            color: "#19a8bb",
          }}
        >
          Password
        </label>
        <input
          type={"password"}
          style={{
            clear: "left",
            float: "left",
            width: "180px",
            marginLeft: "10%",
            marginTop: "4px",
            marginBottom: "8px",
            border: "1.5px solid #1ecae0",
            borderRadius: "5px",
          }}
          onChange={(event) => {
            setpassword(event.target.value);
          }}
          autoComplete={"on"}
        ></input>
         <label
          style={{
            clear: "left",
            float: "left",
            marginLeft: "10%",
            marginTop: "8px",
            color: "#19a8bb",
          }}
        >
          Role
        </label>
         <input
          style={{
            clear: "left",
            float: "left",
            width: "180px",
            marginLeft: "10%",
            marginTop: "4px",
            marginBottom: "8px",
            border: "1.5px solid #1ecae0",
            borderRadius: "5px",
          }}
          type={"text"}
          onChange={(event) => setrole(event.target.value)}
        ></input>
        <input
          type={"submit"}
          value={"On Submit"}
          style={{
            clear: "left",
            float: "left",
            marginLeft: "30%",
            width: "40%",
            height: "10%",
            color: "black",
            backgroundColor: "#fcf633", 
            border: "1px solid #fbf50f",
            borderRadius: "2px"
          }}
          //Check the email and password
          onClick={(event) => {
            event.preventDefault();
            if (
              password === undefined ||
              password === null ||
              password.length <= 0
            ) {
              alert("Password cannot be Empty!");
            }

            if (
              username === undefined ||
              username === null ||
              username.length <= 0
            ) {
              alert("Username cannot be Empty!");
            }
            
            if (
              role === undefined ||
              role === null ||
              role.length <= 0
            ) {
              alert("Username cannot be Empty!");
            }

            if (role === "admin") {
              alert("You are Log In as Admin!");
              props.setIsLoggedIn(true);
            } else {
              alert("You are not Admin!");
              props.setIsLoggedIn(false);
            }
          }}
        ></input>
        </form>
      </div>
    </div>
  );
}
