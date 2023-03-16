import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import cartIcon from './images/cart.svg'

const CartWidget = ()=>{
    const {cartTotal} = useContext(CartContext);

    return (cartTotal() > 0) ? 
        <Link to={"/cart"} className="btn btn-light position-relative"> 
          <img src={cartIcon} alt={cartIcon} width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link> : 
            <Link to={"/cart"} className="btn btn-light position-relative"> 
            <img src={cartIcon} alt={cartIcon} width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </Link>
}

export default CartWidget;