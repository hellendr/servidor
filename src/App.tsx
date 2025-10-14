import { BrowserRouter, Route, Routes } from "react-router-dom";
import Count from "./pages/Count";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashBorard from "./pages/DashBorard";

export default function App() {
  return <>
   <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/CreateCount" element={<Count/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/panel" element={<DashBorard/>}/>
    </Routes>
   </BrowserRouter>
  </>
    
  
}
