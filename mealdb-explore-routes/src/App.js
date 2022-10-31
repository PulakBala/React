
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Category from './Components/Category/Category';
import Main from './Layout/Main';
function App() {
  const router = createBrowserRouter([
    {path: '/',
     element: <Main></Main>,
     children: [
      {path: '/home', element: <Home></Home>},
      {path: '/about', element: <About></About>},
      {path: '/category', element: <Category></Category>}
     ]
    },
    
   
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
