/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import storage from '../AssignmentTwo/storage';

export default function RootPage(props){
  return(
    <div>  
      <div>
        <ul>
    {/*our links will go here */}
          <li>
            <Link to={'/'}>Movie</Link>
          </li>
          <li>
            <Link to={'genre'}>Choose Genre</Link>
          </li>
          <li>
            <Link to={'addmember'}>Add Member</Link>
          </li>
          <li>
            <Link to={'pinnedmovie'}>Pinned Movies</Link>
          </li>
          <li>
            <Link to={'editmovie'}>Edit Movies</Link>
          </li>
        </ul>
      </div>
      <Provider store={storage}>
        <Outlet /> 
        </Provider>  
    </div>  
  )
}