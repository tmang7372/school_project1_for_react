import LoggedInForm from "./Project/LoggedInForm"
import AddMember from "./Project/AddMember";
import Member from "./Project/Member";

const dataMovielist = [{ "id": 1,"movie name" : "Ticket to Paradise","display":"true","description":"Academy Award® winners George Clooney and Julia Roberts reunite on the big screen as exes who find themselves on a shared mission to stop their lovestruck daughter from making the same mistake they once made","genre" :"female", "lead actor": ["George Clooney", "Julia Roberts"],"rating":5,"language":"english"},
{ "id": 2, "movie name": "Black Panter","display":true,"description":"Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.","genre":"female","lead actor":["Angela Bassett","Letitia Wright"],"rating":6,"language":"english"},
{ "id":3, "movie name": "Smile","display":true,"description":"After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter (Sosie Bacon) starts experiencing frightening occurrences that she can't explain.","genre":"male","lead actor":["Sosie Bacon","Jessie T. Usher"],"rating":6,"language":"english"},
{"id":4,"movie name":"Come Back Home","display":true,"description":"In the cold winter, a group of Shenzhen tourist families take a trip to the northeast Changbai Mountain. It was originally intended to be a happy and harmonious holiday, but due to the negligence of his father, an 8-year-old boy is unfortunately lost.","genre":"male","lead actor":["Donnie Yen", "Han Xue"],"rating":6,"language":"mandarian"},
{"id":5,"movie name":"Ajoomma","display":true,"description":"Auntie (Hong Huifang), is a middle-aged Singaporean woman who has dedicated the best years of her life to caring for her family. Now widowed with her grown up son, Sam (Shane Pow) about to fly the roost, Auntie is left to contend with a whole new identity beyond her roles of daughter, wife, and mother.","genre":"female","lead actor":["Hong Huifang", "Jung Dong-Hwan"],"rating":4,"language":"mandarian"}]

function App(props){
    
    const [datamovielist, setdatamovielist] = React.useState(dataMovielist);
    const [isLogin, setIsLoggedIn] = React.useState(false)
    
    const onSubmitHandler = (newHobbies) => {
        setdatamovielist([...datamovielist, newHobbies]);
      };
    

    return(
        <div>
           {/* <LoggedInForm setIsLoggedIn = {setIsLoggedIn}/>  */}
           <AddMember onSubmitHandler={onSubmitHandler} />
            <Member data = {datamovielist} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);