
import './App.css';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import Nav from './Components/Navbar/Nav';
import PhoneBar from './Components/PhoneBar/PhoneBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
      
    </div>
  );
}

export default App;
