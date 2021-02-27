import logo from './logo.svg';
import './App.css';

function App() {
const programmer = ["Jhankar Mahbub", "Hanry costal", "Luice Zar"]
  return (
    <div className="App">
      <header className="App-header">
      <Mango name={programmer[0]} job="Web Developer"></Mango>
      <Mango name={programmer[2]} job="Super Bike Rider"></Mango>
      <Mango name={programmer[1]}></Mango>
      </header>
    </div>
  );
}
function Mango(props){
  const mangoStyle ={
    border:"1px solid green",
    margin: "10px",
  }
  return (
  <div style={mangoStyle}>
    <h2>Name: {props.name}</h2>
    <h4>Job: {props.job}</h4>
  </div>
  );
}

export default App;
