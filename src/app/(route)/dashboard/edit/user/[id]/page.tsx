import EditUser from "@/app/components/EditUser"
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation"
const prisma = new PrismaClient();

const EditPage = async ({params}:{params:{id:string}}) => {
  const users = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!users) return notFound();


  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100'>
    <div className='bg-white rounded-sm shadow p-8'>
      <h1 className='text-2xl font-bold mb-5'>Update User</h1>
      <EditUser data={users} />
    </div>
  </div>
  )
}

export default EditPage