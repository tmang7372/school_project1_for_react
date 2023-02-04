import Member from './AssignmentOne/Member';
import { Provider } from 'react-redux';
import storage from "./AssignmentTwo/storage";

function App(props) {
    
    const [movieData, setmovieData] = React.useState("")

    function getdata(){
        fetch('http://127.0.0.1:3000/movie', { mode: 'cors' })
        .then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data)
            setmovieData(data)

        })
    }
      
    return (
        <div>
          {getdata()}
          <Member movieData= {movieData}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);