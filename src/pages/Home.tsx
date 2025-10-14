import BannerHome from '../componets/Header/BannerHome'
import DetalleProduct from '../componets/Header/DetallesProduct';
import Header from '../componets/Header/Header'
import Newletter from '../componets/Header/Newletter';
import Testimonial from '../componets/Header/Testimonial';
import Fqa from '../componets/Header/Fqa';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const irLogin =()=>{
    navigate("/Login")
    console.log("recibiendo props")
  }

   const createACount=()=>{
    navigate("/CreateCount")
    console.log("recibiendo props")
  }


  return (
    <>
    <BannerHome/>
    <Header
    irLogin={irLogin}
    createACount={createACount}
    Home={Home}/>
    <DetalleProduct/>
    <Testimonial/>
    <Fqa/>
    <Newletter/> 
    </>
   
  )
}

export default Home;