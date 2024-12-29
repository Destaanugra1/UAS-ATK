import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut } from "lucide-react";
import Logo from "@/app/public/logo3.png"
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:hidden"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
              <div className="flex-shrink-0 flex items-center ml-4">
                <Link href="#">
                  <Image src={Logo} alt="Logo" width={40} height={40} />
                </Link>
              </div>
            </div>

            {/* Menu Navbar Desktop */}
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="flex space-x-4">
                <button className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <User className="h-5 w-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="pt-16"> {/* Padding top untuk kompensasi navbar fixed */}
        <aside
          className={`fixed left-0 z-40 w-64 h-full transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 bg-white dark:bg-gray-800 shadow-lg`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/admin"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <User className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Admin</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/user"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                  <span className="ml-3">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <LogOut className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Back Menu</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Overlay untuk mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 sm:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navigation;