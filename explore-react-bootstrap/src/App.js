
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import GridCard from './Components/Grid-card/GridCard';

function App() {
  return (
    <div className="App">
      <button>my button</button>
      <Button variant='info'>React-bootstrap</Button>
      <Spinner animation="grow" variant="primary" />
      <br/>
     <GridCard></GridCard>
    </div>
  );
}

export default App;
