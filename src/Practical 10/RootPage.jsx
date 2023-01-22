import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import storage from '../Practical 9/storage';

export default function RootPage(props){
  return(
    <div>  
      <div>
        <ul>
    {/*our links will go here */}
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'about'}>About</Link>
          </li>
        </ul>
      </div>
      <Provider store={storage}>
        <Outlet /> 
        </Provider>  
    </div>  
  )
}