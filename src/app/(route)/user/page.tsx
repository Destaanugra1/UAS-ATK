import { BackgroundProfile } from "@/app/components/Bg-profile";
import { auth } from "../../../../auth"


const UserPage = async () => {
  const session = await auth();
  return (
    <div className="max-w-screen-xl mx-auto">
      <BackgroundProfile />
      {/* <h1 className="text-2xl">Profile Page</h1>
      <h2>Selamt datang: <span className="font-bold ">{session?.user?.name}</span></h2> */}
    </div>
  )
}

export default UserPage