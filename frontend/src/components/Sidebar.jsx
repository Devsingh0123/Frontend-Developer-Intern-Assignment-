import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside className="bg-gray-100 w-56 p-4 h-screen shadow-md">
      <ul className="flex flex-col gap-4">
        {menuItems.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded font-medium transition ${
                location.pathname === item.path
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-purple-200"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
