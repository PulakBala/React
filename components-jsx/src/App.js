import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'laptop', price:143200},
    {name: 'phone', price:13200},
    {name: 'watch', price:43200},
    {name: 'tablet', price:14200}

  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props) {
  return(
    <div className='product'>
      <h3>Nmae: {props.name} </h3>
      <p>Price:{props.name} {props.price}</p>
    </div>
    
  )
}

export default App;
