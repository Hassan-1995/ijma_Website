import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

interface Props {
  closeSidebar: () => void;
  isOpen: boolean; // Add a prop to handle sidebar visibility
}

const SideBar: React.FC<Props> = ({ closeSidebar, isOpen }) => {
  const links = [
    { label: "Issue Term Sheet", href: "/" },
    { label: "Contact Term Sheet", href: "/issues" },
    { label: "Use Form", href: "/settings" },
    { label: "Processflow", href: "/profile" },
  ];

  return (
    <div
      className={`fixed left-0 w-64 bg-gray-100 border-r px-5 py-5 z-40 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ top: "56px", height: "calc(100vh - 56px)" }} // Adjust top for navbar height
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-zinc-800">Menu</h2>
        <button
          onClick={closeSidebar}
          className="text-zinc-500 hover:text-zinc-800 transition-colors"
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="block text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-5 ">
        <button
          onClick={() => console.log("logout")}
          className="text-zinc-500 flex items-center hover:text-zinc-800 transition-colors"
        >
          <AiOutlineLogout size={20} />
          <span className="ml-3 font-semibold text-zinc-500 hover:text-zinc-800 transition-colors">
            Log Out
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
