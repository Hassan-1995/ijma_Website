import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineFileAdd,
  AiOutlineProfile,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineAppstore,
  AiOutlineFilePpt,
  AiOutlineGift,
  AiOutlineShoppingCart,
  AiOutlineFileText,
  AiOutlineMoon,
  AiOutlineMenu,
  AiOutlineWallet,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  closeSidebar: () => void;
  isOpen: boolean;
}

const SideBar: React.FC<Props> = ({ closeSidebar, isOpen }) => {
  const [activeWalletOpen, setActiveWalletOpen] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);

  const toggleActiveWallet = () => setActiveWalletOpen(!activeWalletOpen);
  const toggleVault = () => setVaultOpen(!vaultOpen);

  const links = [
    { label: "Issue Term Sheet", href: "/", icon: AiOutlineFileAdd },
    { label: "Contract Term Sheet", href: "/issues", icon: AiOutlineProfile },
    { label: "User Form", href: "/settings", icon: AiOutlineUser },
    {
      label: "Processflow",
      href: "/profile",
      icon: AiOutlineFundProjectionScreen,
    },
  ];

  const activeWalletChildren = [
    { label: "Applications", href: "/applications", icon: AiOutlineAppstore },
    { label: "Offers", href: "/offers", icon: AiOutlineGift },
    { label: "Promissory Notes", href: "/promissory", icon: AiOutlineFilePpt },
    { label: "Goods", href: "/goods", icon: AiOutlineShoppingCart },
  ];

  const vaultChildren = [
    {
      label: "Term Sheet Detail",
      href: "/termSheetDetail",
      icon: AiOutlineFileText,
    },
    { label: "Murabaha", href: "/murabaha", icon: AiOutlineMoon },
  ];

  return (
    <div
      className={`fixed left-0 w-64 bg-gray-100 border-r px-5 py-5 z-40 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-3/4"
      }`}
      style={{ top: "64px", height: "calc(100vh - 64px)" }} // Adjust top for navbar height
    >
      {isOpen ? (
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-zinc-800">Menu</h2>
            <button
              onClick={closeSidebar}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Main Links */}
          <ul className="space-y-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center text-zinc-500 hover:text-zinc-800 transition-colors"
                >
                  {link.icon && <link.icon size={20} className="mr-2" />}
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Dropdown Menu */}

            {/* Active Wallet Dropdown */}
            <li>
              <button
                onClick={toggleActiveWallet}
                className={`flex items-center w-full text-zinc-500 ${
                  activeWalletOpen && "text-zinc-800"
                } hover:text-zinc-800 transition-colors`}
              >
                Active Wallet
                {activeWalletOpen ? (
                  <BsChevronUp className="ml-auto" />
                ) : (
                  <BsChevronDown className="ml-auto" />
                )}
              </button>
              {activeWalletOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {activeWalletChildren.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="flex text-zinc-500 hover:text-zinc-800 transition-colors"
                      >
                        {child.icon && (
                          <child.icon size={20} className="mr-2" />
                        )}
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Vault Dropdown */}
            <li>
              <button
                onClick={toggleVault}
                className={`flex items-center w-full text-zinc-500 ${
                  vaultOpen && "text-zinc-800"
                } hover:text-zinc-800 transition-colors`}
              >
                Vault
                {vaultOpen ? (
                  <BsChevronUp className="ml-auto" />
                ) : (
                  <BsChevronDown className="ml-auto" />
                )}
              </button>
              {vaultOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  {vaultChildren.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="flex text-zinc-500 hover:text-zinc-800 transition-colors"
                      >
                        {child.icon && (
                          <child.icon size={20} className="mr-2" />
                        )}
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Logout Button */}
          <div className="flex items-center justify-between mt-5">
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
      ) : (
        // only showing Icons
        <div>
          <div className="flex items-center justify-end mb-6">
            <button
              onClick={closeSidebar}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              <AiOutlineMenu size={23} />
            </button>
          </div>

          {/* Main Links */}
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-end text-zinc-500 hover:text-zinc-800 transition-colors"
                >
                  {link.icon && <link.icon size={22} />}
                </Link>
              </li>
            ))}
            {/* Dropdown Menu */}

            {/* Active Wallet Dropdown */}
            <li>
              <button
                onClick={toggleActiveWallet}
                className={`flex items-center justify-end w-full text-zinc-500 ${
                  activeWalletOpen && "text-zinc-800"
                } hover:text-zinc-800 transition-colors`}
              >
                <AiOutlineWallet size={22} />
              </button>
              {activeWalletOpen && (
                <ul className="ml-4 mt-2 space-y-3">
                  {activeWalletChildren.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="flex justify-end text-zinc-500 hover:text-zinc-800 transition-colors"
                      >
                        {child.icon && (
                          <child.icon size={18} className="ml-4" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Vault Dropdown */}
            <li>
              <button
                onClick={toggleVault}
                className={`flex items-center justify-end w-full text-zinc-500 ${
                  vaultOpen && "text-zinc-800"
                } hover:text-zinc-800 transition-colors`}
              >
                <AiOutlineSafetyCertificate size={22} />
              </button>
              {vaultOpen && (
                <ul className="ml-4 mt-2 space-y-3">
                  {vaultChildren.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="flex justify-end text-zinc-500 hover:text-zinc-800 transition-colors"
                      >
                        {child.icon && (
                          <child.icon size={18} className="ml-4" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Logout Button */}
          <div className="flex items-center justify-end mt-5">
            <button
              onClick={() => console.log("logout")}
              className="text-zinc-500 flex items-center hover:text-zinc-800 transition-colors"
            >
              <AiOutlineLogout size={23} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
