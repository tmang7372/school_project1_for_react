import Hello from './Hello';

function App(props) {
    return (
        <div>
            <Hello />
            <ol>
             <li><b>Name</b> : Jeremiah Ang</li>
             <li><b>Age</b> : 18</li>
             <li><b>Hobbies</b>
             <ol>
                <li>Swim</li>
                <li>Run</li>
                <li>Game</li>
                </ol>
                </li>
            </ol>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
