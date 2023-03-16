import {Link, NavLink} from "react-router-dom";
import logo from "./images/outboardMotorLogo.jpg";
import CartWidget from "./CartWidget";
const NavBar = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                        <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src={logo} alt="LogoOutboard" width={120} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"activeclassname={"active"} to={"/catalogo"}>Catálogo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"activeclassname={"active"}  to={"/category/2T"}>Motores 2 Tiempos </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/4T"}>Motores 4 Tiempos </NavLink>
                            </li>
                            </ul>
                        </div>
                        </div>
                    <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                    </div>
                    </nav>                   
                </div>               
            </div>           
        </div>
    )
};
 
export default NavBar;