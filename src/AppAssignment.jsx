/*
 Assignment 1
 Ang Theow Meng
 P7339041
 */

import LoggedInForm from "./AssignmentOne/LoggedInForm";
import AddMember from "./AssignmentOne/AddMember";
import Member from "./AssignmentOne/Member";
import ChooseGenre from "./AssignmentOne/ChooseGenre";
import DisplaySelectedMovieToBePinned from "./AssignmentTwo/DisplaySelectedMovieToBePinned";
import { Provider } from "react-redux";
import storage from "./AssignmentTwo/storage";
import DisplayChooseMovie from "./AssignmentTwo/DisplayChooseMovie";
import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import RootPage from "./AssignmentTwo/RootPage";

//Json data of movie list
const dataMovielist = [
  {
    id: 1,
    "movie name": "Ticket to Paradise",
    display: "true",
    description:
      "Academy Award® winners George Clooney and Julia Roberts reunite on the big screen as exes who find themselves on a shared mission to stop their lovestruck daughter from making the same mistake they once made",
    genre: "Comedy",
    "lead actor": ["George Clooney", "Julia Roberts"],
    rating: 5,
    language: "english",
  },
  {
    id: 2,
    "movie name": "Black Panter",
    display: true,
    description:
      "Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.",
    genre: "Action",
    "lead actor": ["Angela Bassett", "Letitia Wright"],
    rating: 6,
    language: "english",
  },
  {
    id: 3,
    "movie name": "Smile",
    display: true,
    description:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter (Sosie Bacon) starts experiencing frightening occurrences that she can't explain.",
    genre: "Drama",
    "lead actor": ["Sosie Bacon", "Jessie T. Usher"],
    rating: 6,
    language: "english",
  },
  {
    id: 4,
    "movie name": "Come Back Home",
    display: true,
    description:
      "In the cold winter, a group of Shenzhen tourist families take a trip to the northeast Changbai Mountain. It was originally intended to be a happy and harmonious holiday, but due to the negligence of his father, an 8-year-old boy is unfortunately lost.",
    genre: "Mistery",
    "lead actor": ["Donnie Yen", "Han Xue"],
    rating: 6,
    language: "mandarian",
  },
  {
    id: 5,
    "movie name": "Ajoomma",
    display: true,
    description:
      "Auntie (Hong Huifang), is a middle-aged Singaporean woman who has dedicated the best years of her life to caring for her family. Now widowed with her grown up son, Sam (Shane Pow) about to fly the roost, Auntie is left to contend with a whole new identity beyond her roles of daughter, wife, and mother.",
    genre: "Drama",
    "lead actor": ["Hong Huifang", "Jung Dong-Hwan"],
    rating: 4,
    language: "mandarian",
  },
  {
    id: 6,
    "movie name": "The King Of Musang King",
    display: true,
    description:
      "Mao Shan (Jack Neo) is an ambitious durian farmer who wishes to expand his sales overseas, against pressures from the “Three Heavenly Kings” of the business. He helps Mei Lian (Yeo Yann Yann), his neighbour and sole supporter, to improve her durian farm harvests, and develops feelings for her in the process.",
    genre: "Comedy",
    "lead actor": ["Mark Lee", "Henry Thia"],
    rating: 4,
    displayOneMovie: false,
    selecttobepinned: false,
    language: "mandarian",
  },
];

function App(props) {
  //Initial movie item id
  // let moviesitemsid = [];
  // //Initial hide movie id
  // let hidemoviesid = [];
  // let count = 0;
  let selectmovietobepinnedid = [];

  //useState of movieid, datamovielist, isLogin and hideshowmovieid
  // const [moviesid, setmoviesid] = React.useState(moviesitemsid);
  const [datamovielist, setdatamovielist] = React.useState(dataMovielist); 
  // const [isLogin, setIsLoggedIn] = React.useState(false);
  // const [hideshowmoviesid, sethideshowmoviesid] = React.useState(hidemoviesid);
  let [movietobepinnedid, setmovietobepinnedid] = React.useState(selectmovietobepinnedid);
  let [countId, setcountId] = React.useState(0);

  //Add a new movie list to the original dataMovieList
  function onSubmitHandler(newHobbies) {
    setdatamovielist([...datamovielist, newHobbies]);
  }

  //Add a false boolean to the display if the id is the same
  //so that we can hide the movie list
  // function checkHideShowHandler(event, id) {
  //   if (event.target.checked === true) {
  //     let copy = [...datamovielist];
  //     for (let c = 0; c < copy.length; c++) {
  //       if (id === copy[c].id) {
  //         copy[c].display = false;
  //       }
  //     }
  //     setdatamovielist(copy);
  //     if (hideshowmoviesid.length === 0) {
  //       sethideshowmoviesid([id]);
  //     } else {
  //       addHideShowMoviesId(id);
  //     }
  //   }
  // }

  //Add a true to the display so that the hide movie
  //appear again
  // function onClickShowItemHandler() {
  //   let copy = [...datamovielist];
  //   for (let i = 0; i < hideshowmoviesid.length; i++) {
  //     for (let c = 0; c < copy.length; c++) {
  //       if (hideshowmoviesid[i] === copy[c].id) {
  //         copy[c].display = true;
  //       }
  //     }
  //   }
  //   setdatamovielist(copy);
  //   sethideshowmoviesid([]);
  // }

  // //Add a new movie id to the original id for the hide and show event
  // function addHideShowMoviesId(newmoviesid) {
  //   sethideshowmoviesid([...hideshowmoviesid, newmoviesid]);
  // }

  // //Add a new movie id to the original movie id
  // function addMoviesId(newmoviesid) {
  //   setmoviesid([...moviesid, newmoviesid]);
  // }

  //Delete the movie list
  // function ondeleteHandler(event) {
  //   event.preventDefault();
  //   let copy = [...datamovielist];
  //   for (let i = 0; i < moviesid.length; i++) {
  //     copy = copy.filter((item, index) => moviesid[i] !== item.id);
  //   }
  //   setdatamovielist(copy);
  //   setmoviesid([]);
  // }

  //Check the movie Id whether it is the start of the movie data, then pass it to the movie id
  //container. If it is not the start of the movies data, add it to the original movie id. Also
  //delete it if the checkbox is not checked. This is for the ondeleteHandler. The movie id store
  //the list of id in the movie data
  // function checkIdEventHandler(event, id) {
  //   if (event.target.checked === true) {
  //     if (moviesid.length === 0) {
  //       setmoviesid([id]);
  //     } else {
  //       addMoviesId(id);
  //     }
  //   } else {
  //     let copy = [...moviesid];
  //     copy = copy.filter((data) => data !== id);
  //     setmoviesid(copy);
  //   }
  // }

  //Show the movie according to the genre
  function setgenreHandler(event, genrename) {
    event.preventDefault();
    let data = [...datamovielist];
    for (let i = 0; i < data.length; i++) {
      if (genrename.toLowerCase() === data[i].genre.toLowerCase()) {
        data[i].display = true;
      } else {
        data[i].display = false;
      }

      if (genrename.toLowerCase() === "none") {
        for (let i = 0; i < data.length; i++) {
          data[i].display = true;
        }
      }
    }
    setdatamovielist(data);
  }

  function selectToBePinnedHandler(event, id) {
    if (event.target.checked === true) {
      countId++;
      setcountId(countId);
      if (movietobepinnedid.length === 0) {
        setmovietobepinnedid([id]);
      } else {
        addMoviesIdToBePinned(id);
      }
    }
    if (countId > 5) {
      alert("You cannot pinned more than 5");
    }

    if (event.target.checked === false) {
      movietobepinnedid = movietobepinnedid.filter((item) => item !== id);
      setmovietobepinnedid(movietobepinnedid);
      countId--;
      setcountId(countId);
    }
  }

  function addMoviesIdToBePinned(newmoviesid) {
    setmovietobepinnedid([...movietobepinnedid, newmoviesid]);
  }

  function resetMoviesToBePinned() {
    setmovietobepinnedid([]);
    setcountId(0);
  }

  function showHideId(event,id){
    if (event.target.checked === true) {
      if(movietobepinnedid.length === 0) {
        setmovietobepinnedid([id]);
      } else {
        addMoviesIdToBePinned(id);
      }
    }
       
    if (event.target.checked === false) {
      movietobepinnedid = movietobepinnedid.filter((item) => item !== id);
      setmovietobepinnedid(movietobepinnedid);
    }
  }
  
  const router = createHashRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <Member
                // onClickShowItemHandler={onClickShowItemHandler}
                // ondeleteHandler={ondeleteHandler}
                // onChangeIdHandler={checkIdEventHandler}
                // checkHideShowHandler={checkHideShowHandler}
                // setgenreHandler={setgenreHandler}
                selectToBePinnedHandler={selectToBePinnedHandler}
                showHideId={showHideId} 
                movietobepinnedid={movietobepinnedid}
                resetMoviesToBePinned={resetMoviesToBePinned}/>,
                
        },
  
        {
          path: "genre",
           element: <ChooseGenre 
          //  setgenreHandler={setgenreHandler}
           />,
        },
  
        {
          path: "addmember",
          element: <AddMember onSubmitHandler={onSubmitHandler} />,
        },
  
        {
          path: "pinnedmovie",
          element: (
            <DisplaySelectedMovieToBePinned
              resetMoviesToBePinned={resetMoviesToBePinned}
              movietobepinnedid={movietobepinnedid}
            />
          ),
        },
  
        {
          path: "editmovie",
          element: <DisplayChooseMovie />,
        },
      ],
    },
  ]);
  

  return (
    <div>
        <div>  
            <RouterProvider router={router} />
        </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
