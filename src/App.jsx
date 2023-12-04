import Hello from './Practical 2/Hello';
import RockPaperScissors from './Practical 5/RockPaperScissors';
import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
import RootPage from './Practical 10/RootPage';
import AboutMe from './Practical 10/AboutMe';
import MovePage from './Practical 10/MovePage';

const router = createHashRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <RockPaperScissors />,
            },

            {
                path: '/move/:moveId',
                element: <MovePage />,
            },

            {
                path: 'about',
                element: <AboutMe />,
            },
        ],
    },
]);

function App(props) {
       
    return (
        <div>
           {/* <Hello/>
           <RockPaperScissors/> */}
            <RouterProvider router={router} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
