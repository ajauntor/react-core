import logo from './logo.svg';
import './App.css';

function App() {
  var aboutMe = {
    myName: "MD Aktarujjaman",
    myJob: "I learn Web Development"
  }
  var someStyle ={
    color : "red",
    backgroundColor : "green",
    padding : "10px"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Result = {aboutMe.myName+" "+ aboutMe.myJob}</h2>
        <p style={someStyle}>This is AJ Auntor</p>
      </header>
    </div>
  );
}

export default App;
