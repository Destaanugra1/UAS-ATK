import { prisma } from "./prisma";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

export const getImages = async () => {
  try {
    const result = await prisma.upload.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch  {
    throw new Error("Faild to fetch data");
  }
};

export const getImagesById = async (id: string) => {
  try {
    const result = await prisma.upload.findUnique({
      where: { id },
    });
    return result;
  } catch  {
    throw new Error("Faild to fetch data");
  }
};

export const getUsers = async() => {
  const session = await auth();
  if(!session || !session.user || session.user.role !== "admin") redirect("user");

  try {
    const users = await prisma.user.findMany();
    return users
  }catch (error) {
    console.log(error);
  }
}