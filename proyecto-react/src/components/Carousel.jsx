import galeriaSuzuki from './images/galeriaSuzuki.jpg';
import galeriaMercury from './images/galeriaMercury.jpg'
import galeriaHonda from './images/galeriaHonda.jpg';
const Carousel = ()=>{
    return (
       <div className="container">
        <div className="row">
            <div className="col">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
            <img src={galeriaSuzuki} className="d-block w-100 " alt="Suzuki" height={800} />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
            <img src={galeriaMercury} className="d-block w-100 " alt="Mercury" height={800} />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
                <img src={galeriaHonda} className="d-block w-100" alt="Honda" height={800} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
                </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                    </button>
         </div>
                </div>
                </div>
                </div>
       
    )
};

export default Carousel;