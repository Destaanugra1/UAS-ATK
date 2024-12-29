import Link from "next/link";
import Logo from "@/app/public/logo3.png"
import Image from "next/image";
const NavUserPage = () => {

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-4 md:px-16 py-4 md:py-8 bg-white shadow-md">
        {/* Logo */}
        <div className="">
          <Link href="/">
            <Image src={Logo} alt="logo" width={50} height={50} />
          </Link>
        </div>


        {/* Navigation Links */}
        <div>
          <ul className="flex flex-col lg:flex-row items-center gap-4 p-4 lg:p-0">
            <li>
              <a
                href="/"
                className="text-black text-xl cursor-pointer no-underline opacity-70 hover:opacity-100 transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="text-black text-xl cursor-pointer no-underline opacity-70 hover:opacity-100 transition-all"
              >
              </a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavUserPage;
