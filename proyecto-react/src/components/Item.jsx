import { Link } from "react-router-dom";
const Item = ({item})=>{
    return(
        
            <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card border-0">
                <img src={item.imagen} className="card-img-top" alt={item.modelo} />
                <div className="card-body text-center">
                    <p className="card-title">{item.modelo}</p>
                </div>
            </div>
        </Link>
        
    )
}
export default Item;