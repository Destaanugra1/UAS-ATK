import Link from "next/link";
import { auth } from "../../../../auth";

const SessionDashboard = async () => {
  const session = await auth();
  return (
    <div>

      {session?.user.role === "admin" ? (
      <li className="relative inline-block text-black text-xl cursor-pointer transition-all duration-400 hover:text-[#3498db]">
        <Link href="/dashboard" className="no-underline opacity-70 hover:opacity-100">
          Dashboard
        </Link>
      </li>
      ): null}
    </div>
  );
};

export default SessionDashboard;

