/*
 Assignment 1
 Ang Theow Meng
 P7339041
 */

import LoggedInForm from "./AssignmentOne/LoggedInForm"
import AddMember from "./AssignmentOne/AddMember";
import Member from "./AssignmentOne/Member";
import ChooseGenre from "./AssignmentOne/ChooseGenre";

//Json data of movie list
const dataMovielist = [{ "id": 1,"movie name" : "Ticket to Paradise","display":"true","description":"Academy Award® winners George Clooney and Julia Roberts reunite on the big screen as exes who find themselves on a shared mission to stop their lovestruck daughter from making the same mistake they once made","genre" :"Comedy", "lead actor": ["George Clooney", "Julia Roberts"],"rating":5,"language":"english"},
{ "id": 2, "movie name": "Black Panter","display":true,"description":"Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.","genre":"Action","lead actor":["Angela Bassett","Letitia Wright"],"rating":6,"language":"english"},
{ "id":3, "movie name": "Smile","display":true,"description":"After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter (Sosie Bacon) starts experiencing frightening occurrences that she can't explain.","genre":"Drama","lead actor":["Sosie Bacon","Jessie T. Usher"],"rating":6,"language":"english"},
{"id":4,"movie name":"Come Back Home","display":true,"description":"In the cold winter, a group of Shenzhen tourist families take a trip to the northeast Changbai Mountain. It was originally intended to be a happy and harmonious holiday, but due to the negligence of his father, an 8-year-old boy is unfortunately lost.","genre":"Mistery","lead actor":["Donnie Yen", "Han Xue"],"rating":6,"language":"mandarian"},
{"id":5,"movie name":"Ajoomma","display":true,"description":"Auntie (Hong Huifang), is a middle-aged Singaporean woman who has dedicated the best years of her life to caring for her family. Now widowed with her grown up son, Sam (Shane Pow) about to fly the roost, Auntie is left to contend with a whole new identity beyond her roles of daughter, wife, and mother.","genre":"Drama","lead actor":["Hong Huifang", "Jung Dong-Hwan"],"rating":4,"language":"mandarian"}]

function App(props){
    
    //Initial movie item id
    let moviesitemsid = [];
    //Initial hide movie id
    let hidemoviesid = [];
    
    //useState of movieid, datamovielist, isLogin and hideshowmovieid
    const [moviesid, setmoviesid] = React.useState(moviesitemsid);
    const [datamovielist, setdatamovielist] = React.useState(dataMovielist);
    const [isLogin, setIsLoggedIn] = React.useState(false)
    const [hideshowmoviesid, sethideshowmoviesid] = React.useState(hidemoviesid);
    
    //Add a new movie list to the original dataMovieList
    const onSubmitHandler = (newHobbies) => {
        setdatamovielist([...datamovielist, newHobbies]);
      };

    //Add a false boolean to the display if the id is the same
    //so that we can hide the movie list
    const checkHideShowHandler = (event, id) => {
        if (event.target.checked === true) {
          let copy = [...datamovielist];
          for(let c=0; c< copy.length; c++){
              if(id === copy[c].id){
                copy[c].display = false;
              }
            } 
          setdatamovielist(copy);  
          if (hideshowmoviesid.length === 0) {
              sethideshowmoviesid([id]);
          } else {
              addHideShowMoviesId(id);
          }
              
        } } 
    
    //Add a true to the display so that the hide movie
    //appear again    
    const onClickShowItemHandler = () => {
          let copy = [...datamovielist];
          for (let i = 0; i < hideshowmoviesid.length; i++) {
            for(let c=0; c< copy.length; c++){
              if(hideshowmoviesid[i] === copy[c].id){
                copy[c].display =true;
              }
          };
         }
         setdatamovielist(copy);
         sethideshowmoviesid([]);
        }
    
    //Add a new movie id to the original id for the hide and show event
    function addHideShowMoviesId(newmoviesid) {
          sethideshowmoviesid([...hideshowmoviesid, newmoviesid]);
        }

    //Add a new movie id to the original movie id
    function addMoviesId(newmoviesid) {
        setmoviesid([...moviesid, newmoviesid]);
      }  
    
    //Delete the movie list  
    const ondeleteHandler = (event) => {
        event.preventDefault();
        let copy = [...datamovielist];
        for (let i = 0; i < moviesid.length; i++) {
          copy = copy.filter((item, index) => moviesid[i] !== item.id);
        }
        setdatamovielist(copy);
        setmoviesid([]);
      };
    
    //Check the movie Id whether it is the start of the movie data, then pass it to the movie id 
    //container. If it is not the start of the movies data, add it to the original movie id. Also
    //delete it if the checkbox is not checked. This is for the ondeleteHandler. The movie id store
    //the list of id in the movie data  
    const checkIdEventHandler = (event, id) => {
        if (event.target.checked === true) {
          if (moviesid.length === 0) {
            setmoviesid([id]);
          } else {
            addMoviesId(id);
          }
        } else {
          let copy = [...moviesid];
          copy = copy.filter((data) => data !== id);
          setmoviesid(copy);
        }
      };
    
    //Show the movie according to the genre  
    function setgenreHandler(event,genrename){
        event.preventDefault();
        let data = [...datamovielist]
        for(let i =0; i<data.length; i++){
          if(genrename.toLowerCase() === data[i].genre.toLowerCase() ){
             data[i].display= true;
          }else {
            data[i].display = false;
          }

          if(genrename.toLowerCase() === "none"){
            for(let i=0; i < data.length; i++ ){
              data[i].display = true;
            }
          }
        }
        setdatamovielist(data);
       
    }

    return(
        <div>
           <LoggedInForm setIsLoggedIn = {setIsLoggedIn}/>
           {isLogin && <div><AddMember onSubmitHandler={onSubmitHandler} />
            <Member data = {datamovielist} onClickShowItemHandler={onClickShowItemHandler} ondeleteHandler={ondeleteHandler} onChangeIdHandler={checkIdEventHandler} checkHideShowHandler={checkHideShowHandler} setgenreHandler={setgenreHandler}/>
            <ChooseGenre setgenreHandler={setgenreHandler} /></div>}
                  
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);