import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
          <Routes>
            <Route path={"/"} element={<Carousel />} />
            <Route path={"/catalogo"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          </Routes>
        <Carousel />     
      </div>
    </BrowserRouter>
  );
}

export default App;
