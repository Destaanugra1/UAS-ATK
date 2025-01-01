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

export const DataProduct = async () => {
  try {
    const count = await prisma.upload.count()
    return count
  } catch {
    throw new Error("Failed to fetch data");
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

export const getJumlahUser = async() => {
  const session = await auth();
  if(!session || !session.user || session.user.role !== "admin") redirect("user");

  try {
    const count = await prisma.user.count();
    return count
  }catch (error) {
    console.log(error);
  }
}