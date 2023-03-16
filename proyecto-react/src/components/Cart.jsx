import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import eliminar from './images/eliminar.svg'
import '../index.css';

const Cart = () => {
    
    const {cart, clear, removeItem, cartTotal, cartSum} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container cartVacio">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-light text-center" role="alert">No se han cargado productos en el carrito</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container  divCart">
            <div className="row">
                <h1 className="text-center">Productos Seleccionados</h1>
                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                    <table className="table">
                        <tr>
                            <td className="text-end" colSpan={5}><Link className="btn btn-dark bg-dark" onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                        </tr>
                        {cart.map(item => ( 
                                <tr key={item.id}>
                                    <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="text-start align-middle" width="40%">{item.nombre} {item.modelo} </td>
                                    <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                                    <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle" width="10%"><button type="button" className="btn btn-dark bg-light" onClick={() => {removeItem(item.id)}} title={"Eliminar Producto"}><img src={eliminar} alt={"Eliminar Producto"} width={32} /></button></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a Pagar</td>
                            <td className="text-center"><b>${cartSum()}</b></td>
                            <td className="text-end"><Link to={"/checkout"} className="btn btn-dark bg-dark">Gestionar orden</Link></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
          </div> 
    )
}

export default Cart;