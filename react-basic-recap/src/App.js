import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name={'Madaripur'} special={'kkhajurerGur'}></District>
      <District name={'Faridpur'} special={'Rosgolla'}></District>
      <District></District>
      <District></District>
    </div>
  );
}
function District (props){
  return(
    <div className='district'>
      <h2>Name :{props.name}</h2>
      <p>Special :{props.special}</p>
    </div>
  )
}

export default App;
