/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
 import { useSelector, useDispatch } from 'react-redux';
 import { showSelectedPinnedMovie } from '../AssignmentTwo/recordSlice';
 
export default function Member({movietobepinnedid, resetMoviesToBePinned}){
      
      // const [movieIdToBePinned,setmovieIdToBePinned] = React.useState([])
      
      const dispatch = useDispatch();
      
      // const id = useSelector(function(store) {
      //   return store.record.movieId;
      // }); 

      const records = useSelector(function(store) {
        return store.record.value;
       });
      
       return (
            <div>
              <table style = {{ width: "100%", marginTop: "50px", backgroundColor: "black", borderCollapse: "collapse"}}>
                <thead style={{ border: "2px solid #ea4915"}}>
                  <tr>
                    <th style={{ border: "2px solid #696969", color: 'white', backgroundColor: "black"}}>Id</th>
                    <th style={{ border: "2px solid #696969", color: 'white', backgroundColor: "black" }}>Name</th>
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}}>Description of Movies</th>
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}}>Genre</th>
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}} colSpan={"2"}>Actors</th>
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}}>Rating</th>
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}}>Language</th>
                </tr>
                </thead>
                <tbody>{
                records.map((info,num) => {
                  return (
                  info.selecttobepinned &&(
                  <tr key={info.id}>
                    <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center'}}>{info.id}</td>
                    <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center'}}>{info['movie name']}</td>
                    <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center', margin: '1px auto'}}>{info.description}</td>
                    <td style={{ border: "2px solid #696969", color: 'white'}}>{info.genre}</td>
                    { 
                    info['lead actor'].map((data)=><td style={{ border: "2px solid #696969", color: 'white'}}>
                      {data}</td>)}
                    <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center'}}>{info.rating}</td>
                    <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center'}}>{info.language}</td>
                  </tr> 
                  ))
              }) 
                }</tbody>
                
              </table>
              <div className="buttonSeparation" style={{textAlign:"center"}}  >
                    <input style={{ marginTop: "10px"}} type={"button"} value={"Show the Movie to be Pinned"} onClick={()=>dispatch(showSelectedPinnedMovie(movietobepinnedid))} ></input>
                    <input type={"button"} style={{ marginLeft: "10px", marginTop: "10px" }} value={"Reset the Movie to be Pinned"} onClick={()=>resetMoviesToBePinned()} ></input>
              </div>      
              </div>)
}