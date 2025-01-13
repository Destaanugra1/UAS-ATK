import Link from "next/link";
import { auth, signOut } from "../../../../auth";

export default async function SessionSignout() {
  const session = await auth();

  return (
    <div className="">
      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}>
          <button
            type="submit"
            className="">
            Sign Out
          </button>
        </form>
      ) : (
        <Link href="/login">Sign in</Link>
      )}
    </div>
  );
}

// export default async function SignIn() {
//   const session = await auth();
//   retrun (
//     <div></div>
//   )
// }
