
import './App.css';
import Nav from './Components/Navbar/Nav';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className='text-3xl font-bold '>This is a Tailwind</h1>
      <p>This is a paragraph</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
