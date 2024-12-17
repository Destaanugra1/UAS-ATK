"use server";
import { z } from "zod";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {prisma} from "../lib/prisma"

// interface UploadSchemaType {
  //   title: string;
  //   deskripsi: string;
  //   harga: string;
  //   image: File;
  // }
  
  const UploadSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(3),
    price: z.string().min(1),
    image: z
      .instanceof(File)
      .refine((file) => file.size > 0, { message: "Image is required" })
      .refine((file) => file.size == 0 || file.type.startsWith("image/"), {
        message: "only images",
      })
      .refine((File) => File.size < 4000000, {
        message: "Gambar anda lebih dari 4MB",
      }),
  });

  export const UpluadImage = async (prevState: unknown, FormData: FormData) => {
    const validatedFileds = UploadSchema.safeParse(
      Object.fromEntries(FormData.entries())
    );
    if (!validatedFileds.success) {
      return {
        error: validatedFileds.error.flatten().fieldErrors,
      };
    }
    const { title, description, price, image } = validatedFileds.data;
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    try {
      await prisma.upload.create({
        data: {
          title,
          description,
          price,
          image: url,
        },
      });
    } catch {
      return { messege: "Faild data" };
    }
    revalidatePath("/");
    redirect("/");
  };

