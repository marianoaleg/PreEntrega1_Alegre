import { Link, useParams } from "react-router-dom";

const CompraFinalizada = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    {orderId ? <div class="alert alert-dark text-center" role="alert"><h3>Gracias por su compra</h3><p>Se generó una Orden de Compra con el ID: <b>{orderId}</b></p></div> : ""}
                    <Link to={"/"} class="btn btn-dark m-1">Menú Principal</Link>
                    <Link to={"/catalogo"} class="btn btn-dark">Catálogo</Link>
                </div>
            </div>
        </div>
    )
}

export default CompraFinalizada;