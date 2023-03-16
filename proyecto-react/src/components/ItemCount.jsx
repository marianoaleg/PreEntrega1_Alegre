import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const ItemCount = ({stock, onAdd}) => {
    
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
    
    useEffect(()=>{
        setItemStock(stock);
     }, [stock])
    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            console.log("Agregaste: " + items + " Productos al Carrito!");
            setItemAdded(true);
            onAdd(items);
        }
    }
 
    return (
        <div className="container ">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-dark" onClick={decrementarStock}>-</button>
                        <button className="btn btn-dark">{items}</button>
                        <button className="btn btn-dark" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    

                    {itemAdded ? <Link to={"/cart"} className="btn btn-dark"> Finalizar Compra</Link> : <button className="btn btn-dark" onClick={addToCart}>Agregar Al Carrito</button>}

                </div>
            </div>
        </div>
    )
}

export default ItemCount;