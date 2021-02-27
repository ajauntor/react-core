import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      </header>
    </div>
  );
}
function Counter (){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={ () => setCount (count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users (){
  const [user, setUser]= useState([]);
  useEffect(() => {
    
  }
  )
  return (
    <div>
      <h5>All of Dynamic User</h5>
    </div>
  )
}
export default App;
