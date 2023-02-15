import ItemCount from "./ItemCount";
const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.modelo} width={500} height={500} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h2>Marca: {item.nombre} </h2>
                        <h2>Modelo: {item.modelo}</h2>
                        <h5>Precio: {item.precio} USD</h5>
                        <p>Tipo de motor: {item.tipoMotor}</p>
                        <p>Cilindrada: {item.cilindrada} </p>
                        <p>Potencia: {item.potencia} HP</p>
                        <p>Encendido: {item.encendido} </p>
                        <p>Peso: {item.peso}Kg</p>
                        <ItemCount stock = {item.stock} />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail; 