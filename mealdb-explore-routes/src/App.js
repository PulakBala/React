
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  const router = createBrowserRouter([
    {path: '/', element: <div>This is Default page</div>},
    {path: '/home', element: <Home></Home>},
    {path: '/about', element: <div>This is About Page</div>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
