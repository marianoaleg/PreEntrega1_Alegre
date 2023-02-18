import { useState, useEffect } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
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

    const onAdd = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            console.log("Agregaste: " + items + " Productos al Carrito!");
        }
    }
 
    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button className="btn btn-light">{items}</button>
                        <button className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button className="btn btn-light" onClick={onAdd}>Agregar Al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;