"use client";
import { useState } from "react";
import SideBar from "./SideBar";
import Link from "next/link";
import Image from "next/image";

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
      <nav className="flex border-b mb-2 px-5 h-16 items-center justify-between">
        <div className="flex space-x-6 items-center">
          <button
            onClick={toggleSidebar}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {/* <AiOutlineMenu size={24} /> */}
            <Image
              aria-hidden
              src="/Ijma.png"
              alt="Ijma icon"
              width={40}
              height={40}
            />
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
        </div>
        <div>
          <p>hello</p>
        </div>
      </nav>
      <SideBar closeSidebar={toggleSidebar} isOpen={isSidebarOpen} />
    </>
  );
};

export default NavBar;
