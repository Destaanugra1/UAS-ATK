import { auth } from "../../../../auth"


const UserPage = async () => {
  const session = await auth();
  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <h1 className="text-2xl">Profile Page</h1>
      <h2>Selamt datang: <span className="font-bold ">{session?.user?.name}</span></h2>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}

export default UserPage