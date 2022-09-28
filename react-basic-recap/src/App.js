import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name={'Madaripur'} special={'kkhajurerGur'}></District>
      <District name={'Faridpur'} special={'Rosgolla'}></District>
      <District></District>
      <District></District>
    </div>
  );
}

function LoadPosts () {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h2>Posts : {posts.length}</h2>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return(
    <div className='title-box'>
      <h1>Title : {props.title}</h1>
      <p>Body : {props.body}</p>
    </div>
  )
}

function District (props){
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return(
    <div className='district'>
      <h2>Name :{props.name}</h2>
      <p>Special :{props.special}</p>
      <h3>Power : {power}</h3>
      <button onClick={boostPower}>Boots The Power</button>

    </div>
  )
}

export default App;
