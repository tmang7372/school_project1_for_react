/*
 Assignment 1
 Ang Theow Meng
 P7339041
 */
export default function Member({data, ondeleteHandler, onChangeIdHandler, checkHideShowHandler, onClickShowItemHandler}){
        
      const tableRows =(data)=> 
        //Display the movie list in a table  
        data.map((info,num) => {
            return (
             info.display && (
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
              <td style={{ border: "2px solid #696969", textAlign: "center" }}><input type={"checkbox"} id={"deletemovies"} name={"deletemovies"} onChange={(event) => onChangeIdHandler(event,info.id)}></input></td>
              <td style={{ border: "2px solid #696969", textAlign: "center"}}><input type={"checkbox"} id={"showHideMovies"} name={"showHideMovies"} onChange={(event) => checkHideShowHandler(event,info.id)}></input></td> 
            </tr> 
            ))
        }) 
    
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
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}}>Remove Items</th>
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}}>Hide Items</th>
                  
                  </tr>
                </thead>
                <tbody>{tableRows(data)}</tbody>
              </table>
              <div className="buttonSeparation">
                <ol style={{ textAlign: "center", listStyleType: "none", listStylePosition: "inside"}}>
                    <li style={{ border: "2px solid #696969", width: '89px', listStyle: "none", display: "inline-block"}}>
                      <input  type={"button"} onClick= {ondeleteHandler} value={"Delete Items"}></input>
                    </li>
                    <li style={{ display: "inline-block", border: "2px solid #696969", width: '135px',marginLeft: "10px"}}>
                      <input  type={"button"} value={"Show the hide items"} onClick={onClickShowItemHandler} ></input>
                  </li>
                  
                </ol>
              </div>      
              </div>)
}