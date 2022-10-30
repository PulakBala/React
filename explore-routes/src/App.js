import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Main from './Layout/Main';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', 
      element: <Main></Main>,
      children: [
        {path: '/home', element: <Home></Home>},
        {path: 'about', element: <About></About>},
        {path:'/friends',
        loader: async() => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        } ,
         element: <Friends></Friends>
        },
        {
          path:'/friend/:friendNum',
          loader: async ({params}) =>{
           return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendNum}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts',
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        }
      ]
    },
   
      {path: 'contact', element: <Contact></Contact>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
