import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import youtube from './images/youtube.svg';
import yamaha from './images/Yamaha-Logo.png';

const Footer = ()=>{
    return(
        <div className="mt-5 container-fluid d-flex align-items-center" style={{height:200}} >            
                
                    <div className='col '>
                    <a href={"https://www.yamaha-motor.com.ar/"}><img src={yamaha} alt={"Yamaha"} width={200} /></a>
                    </div>
                <div className='col text-end '>
                        <a className='m-2' href={"https://www.facebook.com/YamahaMotorArgentinaSA"}><img src={facebook} alt={"Facebook"} width={40} /></a>
                        <a className='m-2' href={"https://www.instagram.com/yamahamotorarg/?hl=es"}><img src={instagram} alt={"Instagram"} width={40}/></a>
                        <a className='m-2' href={"https://www.youtube.com/yamahamotorargentina"}><img src={youtube} alt={"Youtube"} width={40}/></a>               
                </div> 
                
        </div>
    )
}
export default Footer;