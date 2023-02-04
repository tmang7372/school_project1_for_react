export default function LoggedInForm(props) {
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");

  return (
    <div
      style={{
        width: "280px",
        height: "230px",
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
          height: "200px",
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

            if (username === "tmang@outlook.sg" && password === "hie6jb9y") {
              alert("You are Log In!");
              props.setIsLoggedIn(true);
            } else {
              alert("Either the Password or Username is Incorrect!");
              props.setIsLoggedIn(false);
            }
          }}
        ></input>
        </form>
      </div>
    </div>
  );
}
