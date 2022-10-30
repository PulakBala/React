import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  const router = createBrowserRouter([
      {path: '/', element: <div>This is Defalut page</div>},
      {path: '/home', element: <Home></Home>},
      {path: 'about', element: <About></About>},
      {path: 'contact', element: <Contact></Contact>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
