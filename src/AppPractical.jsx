import Hello from './Practical 2/Hello';
import RockPaperScissors from './Practical 5/RockPaperScissors';

function App(props) {
       
    return (
        <div>
           <Hello/>
           <RockPaperScissors/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
