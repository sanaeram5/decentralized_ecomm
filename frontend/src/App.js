import './App.css';
import Header from './components/Header/index'
import Products from './containers/product'
import CarouselCont from './components/CarouselCont';
import Cards from './components/cards';


function App() {
  return (
    <>
      <Header />
      <CarouselCont/>
      <Cards/>
      <Products/>
      </>

  );
}

export default App;
