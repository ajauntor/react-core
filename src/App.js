import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Mango></Mango>
      <Mango></Mango>
      </header>
    </div>
  );
}
function Mango(){
  const mangoStyle ={
    border:"1px solid green",
    margin: "5px",
  }
  return (
  <div style={mangoStyle}>
    <h2 style={{padding:"0 5px"}}>Mango is very famous food in bangladesh</h2>
    <h4>So, let's eat mango!</h4>
  </div>
  );
}

export default App;
