import logo from './logo.svg';
import './App.css';

function App() {
  const productList=[
    {names:"Hero Hunk", ccLimit:"160kmp", price:"$3216"},
    {names:"Pulsar NS", ccLimit:"175kmp", price:"$3010"}
]
  return (
    <div className="App">
      <header className="App-header">
        <Product></Product>
      <Product heroHunk={productList[0]}></Product>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    backgroundColor: "#524444",
    border:"10px solid #3D2F2F",
    borderRadius: "5px",
    width:"400px",
    height:"370px",
    float:"left",
  }
  console.log(props);
  return(
    <div style={productStyle}>
      <h3>Bike Model:{props.heroHunk.names}</h3>
      <h2>Max Speed:{props.speed}</h2>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
