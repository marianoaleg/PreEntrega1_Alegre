import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer stock ={"Sin Stock"} />
      <Carousel />     
    </div>
  );
}

export default App;
