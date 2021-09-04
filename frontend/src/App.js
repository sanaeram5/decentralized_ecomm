import './App.css';
import { Badge } from 'react-bootstrap';
import Header from './components/Header/index'
import Products from './containers/product'
import CarouselCont from './components/CarouselCont';
import Cards from './components/cards';


function App() {
  return (
    <>
      <Header />
      {/*<CarouselCont />
      <div>
        <h1 style ={{
          margin: '20px 0 20px 10px'
        }}>
          Deals of the day <Badge bg="success">New</Badge>
        </h1>
      </div>
      <Cards />

      <div>
        <h1 style ={{
          margin: '20px 0 20px 10px'
        }}>
          Top offers  <Badge bg="secondary">now</Badge>
        </h1>
      </div>*/}

      <Products />
    </>

  );
}

export default App;
