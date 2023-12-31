export default function Member({data}){
    
        const tableRows =(data)=> 
          data.map((info,num) => {
            return (
             info.display && (
            <tr key={info.id}>
              <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center'}}>{info.id}</td>
              <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center'}}>{info['movie name']}</td>
              <td style={{ border: "2px solid #696969", color: 'white', textAlign: 'center'}}>{info.display}</td>
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
    
        return (
            <div>
              <table style = {{ width: "100%", marginTop: "50px", backgroundColor: "black", borderCollapse: "collapse"}}>
                <thead style={{ border: "2px solid #ea4915"}}>
                  <tr>
                    <th style={{ border: "2px solid #696969", color: 'white', backgroundColor: "black"}}>Id</th>
                    <th style={{ border: "2px solid #696969", color: 'white', backgroundColor: "black" }}>Name</th>
                    <th style={{ border: "2px solid #696969" , color: 'white', backgroundColor: "black"}}>Display</th>
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
              </div>)
}