import LoggedInForm from "./Project/LoggedInForm"

function App(props){
    
    const [isLogin, setIsLoggedIn] = React.useState(false)
    
    return(
        <div>
           <LoggedInForm setIsLoggedIn = {setIsLoggedIn}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);