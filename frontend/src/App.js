import './App.css';
import Header from './components/Header/index'
import Order from './containers/order';
import CarouselCont from './components/CarouselCont';
import Cards from './components/cards';

function App() {
  return (
    <>
      <Header />
      <CarouselCont/>
      <Cards/>
      <Order />
    </>

  );
}

export default App;
