import './App.css';
import Cart from './containers/cart';
import Header from './components/Header/index'
import Order from './containers/order';
import Products from './containers/product'


function App() {
  return (
    <>
      <Header />
      {/* <Cart/> */}
      {/* <Order /> */}
      <Products/>
      </>

  );
}

export default App;
