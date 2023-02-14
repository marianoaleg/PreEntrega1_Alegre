const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.modelo} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1>{item.modelo}</h1>
                        <h5>{item.precio} kcal</h5>
                        <p>{item.tipoMotor}</p>
                        <p><b>${item.peso}</b></p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail; 