import logo from './logo.svg';
import './App.css';

function App() {
  const friendsName = [
    {name:"Abdul Jalil", age:45, location: "Kismot"},
    {name:"AJ Auntor", age:24, location:"Hossenpur"},
    {name:"Israt Jahan", age:23, location:"Mirpur, Dhaka"}
  ]
  const friends = friendsName.map(friend => friend);
  console.log(Friends);
  return (
    <div className="App">
      <header className="App-header">
      <Friends name={friendsName[0].name} location={friendsName[0].location} age={friendsName[0].age}></Friends>
      </header>
    </div>
  );
}
function Friends(props){
  return(
    <div>
      <h3>Your Name is: {props.name}</h3>
      <h4>Your Current location is:{props.location}</h4>
      <h4>Your Age is: {props.age}</h4>
    </div>
  );
}
export default App;
