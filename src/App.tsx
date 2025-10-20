import { BrowserRouter, Route, Routes } from "react-router-dom";
import Count from "./pages/Count";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashBorard from "./pages/DashBorard";
import Perfil from "./pages/panel/Perfil";
import Historial from "./pages/panel/Historial";
import Estado from "./pages/panel/Estado";
import Bienestar from "./pages/panel/Bienestar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateCount" element={<Count />} />
        <Route path="/Login" element={<Login />} />

        {/* RUTA PRINCIPAL DEL PANEL */}
        <Route path="/panel" element={<DashBorard />}>
          {/* 👇 RUTAS HIJAS (SUBMENÚ) */}
          <Route path="perfil" element={<Perfil />} />
          <Route path="historial" element={<Historial />} />
          <Route path="estado" element={<Estado />} />
          <Route path="bienestar" element={<Bienestar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
