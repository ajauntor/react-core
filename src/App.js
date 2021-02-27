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
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={ () => setCount (count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
export default App;
