import CreateCount from "../componets/Login/CreateCount"
import { useNavigate } from "react-router-dom";
export default function Count() {
  const navigate = useNavigate();

  const irALogin =()=>{
    navigate("/Login")
  }
 
  

  return (
    <CreateCount
    irALogin={irALogin}/>
   
    
  )
}
