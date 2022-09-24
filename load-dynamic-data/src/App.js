import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternlUser></ExternlUser>
    </div>
  );
}

function ExternlUser() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name = {user.name} email = {user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border: '2px solid red', margin:'10px', borderRadius: '20px'}}> 
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
