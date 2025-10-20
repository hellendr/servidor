import LoginCount from "../componets/Login/LoginCount" 
import { useNavigate } from "react-router-dom"


export default function Login() {
  const navigate = useNavigate()
  const goCreateCount=()=>{
    navigate('/CreateCount')
  }
  const goPanel=()=>{
    navigate('/Panel')
  }
  return (
    <>
    <LoginCount
    goCreateCount={goCreateCount}
    goPanel={goPanel}/>
    </>
    
    
  )
}
