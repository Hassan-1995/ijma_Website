"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SideBar from "./SideBar";
import Link from "next/link";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const links = [
    { label: "Ijma", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <>
      <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <button
          onClick={toggleSidebar}
          className="text-zinc-500 hover:text-zinc-800 transition-colors"
        >
          <AiOutlineMenu size={24} />
        </button>
        <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      </nav>
      <SideBar closeSidebar={toggleSidebar} isOpen={isSidebarOpen} />
    </>
  );
};

export default NavBar;
