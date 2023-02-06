import logo from "./images/outboardMotorLogo.jpg"
import CartWidget from "./CartWidget";
const NavBar = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                        <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                        <a className="navbar-brand" href={"/"}><img src={logo} alt="LogoOutboard" width={120} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={"/"}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/"}>Motores fuera borda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/"}>Motores internos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/"}>Lubricantes</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <CartWidget />
                    </nav>
                    
                </div>
                
            </div>
            
        </div>
    )
};
 
export default NavBar;