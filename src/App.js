import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      </header>
    </div>
  );
}
function Counter (){
  const [count, setCount] = useState(420)
  return (
    <div>
      <h3>Count:{count}</h3>
    </div>
  )
}
export default App;
