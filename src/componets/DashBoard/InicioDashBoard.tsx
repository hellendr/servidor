import { Link, useLocation } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";

const Sidebar = () => {
  const location = useLocation();  

  
  const navigation = [
    { to: "/panel/perfil", name: "Perfil", icon: "👤" },
    { to: "/panel/historial", name: "Historial", icon: "📊" },
    { to: "/panel/estado", name: "Estado", icon: "📜" },
    { to: "/panel/bienestar", name: "Bienestar", icon: "🩺" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-20 h-full border-r bg-white flex flex-col justify-between">
      {}
      <div className="h-20 flex items-center justify-center">
        <Link to="/panel">
          <img src="" width={35} alt="logo" />
        </Link>
      </div>

      {}
      <ul className="flex-1 flex flex-col items-center gap-6">
        {navigation.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`text-xl ${
                location.pathname === item.to
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {item.icon}
              <p className="text-xs">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* AVATAR */}
      <div className="p-4 flex justify-center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="outline-none">
            <Avatar.Root>
              <Avatar.Image
                className="w-10 h-10 rounded-full ring-2 ring-gray-300 cursor-pointer"
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt="user"
              />
              <Avatar.Fallback className="flex w-10 h-10 rounded-full items-center justify-center bg-blue-500 text-white text-sm">
                U
              </Avatar.Fallback>
            </Avatar.Root>
          </DropdownMenu.Trigger>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default Sidebar;
