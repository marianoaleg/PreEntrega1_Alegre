import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Checkout from "./components/Checkout";
import CompraFinalizada from './components/CompraFinalizada';
function App() {
  return (
    
    <CartContextProvider>
        <BrowserRouter>
          <div>
            <NavBar />
              <Routes>
                <Route path={"/"} element={<Carousel />} />
                <Route path={"/catalogo"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
                <Route path={"/cart"} element={<Cart />} />  
                <Route path={"/Checkout"} element={<Checkout />} /> 
                <Route path={"/CompraFinalizada/:orderId"} element={<CompraFinalizada />} /> 
                <Route path={"*"} element={<Error404 />} />          
              </Routes>
            <Footer />
          </div> 
        </BrowserRouter>
      </CartContextProvider>    

  );
}

export default App;
