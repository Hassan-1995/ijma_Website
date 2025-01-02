import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  closeSidebar: () => void;
  isOpen: boolean;
}
const Drawer: React.FC<Props> = ({ closeSidebar, isOpen }) => {


  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed ">
      {/* Toggle Button */}
      <button onClick={closeSidebar} className="p-2 text-white bg-blue-500 ">
        {isOpen ? <AiOutlineClose size={24} /> : "Open Drawer"}
      </button>

      {/* Drawer Component */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-gray-100 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold text-zinc-800">Menu Drawer</h2>
          <button
            onClick={closeSidebar}
            className="text-zinc-500 hover:text-zinc-800"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="space-y-4 p-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
