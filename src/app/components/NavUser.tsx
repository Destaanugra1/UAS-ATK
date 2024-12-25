import Image from "next/image";
import Link from "next/link";
import Logo from "../../app/public/logo2.png";
import { auth, signOut } from "../../../auth";

const NavUser = async () => {
  const session = await auth();
  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image src={Logo} alt="logo" width={50} height={50} priority />
        </Link>
        <div className="flex items-center gap-3">
          <ul className="md:flex md:text-xs items-center gap-4 mr-5 font-semibold text-gray-600 hover:text-gray-800">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tim" className="font-bold">Kelompok 1</Link>
            </li>
            {session?.user.role === "admin" ?(
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            ): null}
          </ul>
          {session && (
            <div className="flex gap-3 item-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-500 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="font-xs text-gray-400 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button
                type="button"
                className="text-sm ring-2 bg-gray-100 rounded-full">
                <Image
                  src={session.user.image || "/../../app/public/logo1.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          )}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}>
              <button
                type="submit"
                className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500">
                Sign Out
              </button>
            </form>
          ) : (
            <Link href="/login">Sign in</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavUser;
