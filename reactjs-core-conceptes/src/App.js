import logo from './logo.svg';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h2>New Container</h2>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>


    </div>
  );
}

 function Person(){
  return (
    <div className='person'>
    <h1>Sakib Al Hasan</h1>
    <p>Profession: Cricketer</p>
  </div>
  )
 }

 function Friend() {
  return(
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>Job: maramari</p>
    </div>
  )
 }

export default App;
