import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
const Carga = () => {
    return (
        <div className="container my-5 divCarga">
            <div className="row">
                <div className="col-md-12 text-center spinner">
                    <Spinner color="dark"/>
                    <h1>Cargando...</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Carga;