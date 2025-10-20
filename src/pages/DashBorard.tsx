import { Outlet } from "react-router-dom";
import Sidebar from "../componets/DashBoard/InicioDashBoard";

export default function DashBorard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-20 p-6 flex-1">
        {/* Aquí se mostrarán las páginas del submenú */}
        <Outlet />
      </main>
    </div>
  );
}
