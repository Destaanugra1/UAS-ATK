"use server";
import { z } from "zod";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { getImagesById } from "./data";
import { EditUserSchema, RegisterSchema, SignInSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { signIn } from "../../auth";
import { AuthError } from "next-auth";


// uplaoad
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


// edit 
const EditSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(3),
  price: z.string().min(1),
  image: z
    .instanceof(File)
    .refine((file) => file.size == 0 || file.type.startsWith("image/"), {
      message: "only images",
    })
    .refine((File) => File.size < 4000000, {
      message: "Gambar anda lebih dari 4MB",
    })
    .optional(),
});


// validasi Upload
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
  revalidatePath("/dashboard/admin");
  redirect("/dashboard/admin");
};

// Update Image
export const UpdateImage = async (
  id: string,
  prevState: unknown,
  FormData: FormData
) => {
  const validatedFileds = EditSchema.safeParse(
    Object.fromEntries(FormData.entries())
  );
  if (!validatedFileds.success) {
    return {
      error: validatedFileds.error.flatten().fieldErrors,
    };
  }
  const data = await getImagesById(id);
  const { title, description, price, image } = validatedFileds.data;
  if (!data) return { message: "No data Found" };
  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    imagePath = url;
  }

  try {
    await prisma.upload.update({
      data: {
        title,
        description,
        price,
        image: imagePath,
      },
      where: { id },
    });
  } catch {
    return { messege: "Faild to update data data" };
  }
  revalidatePath("/dashboard/admin");
  redirect("/dashboard/admin");
};

// delete Image
export const deleteImage = async (id: string) => {
  const data = await getImagesById(id);
  if (!data) return { message: "No data Found" };

  await del(data.image);
  try {
    await prisma.upload.delete({
      where: { id },
    });
  } catch {
    return { message: "Faild to delete data" };
  }

  revalidatePath("/dashboard/admin");
};

// register
export const signUpCredential = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFileds = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFileds.success) {
    return {
      error: validatedFileds.error.flatten().fieldErrors,
    };
  }
  const { name, email, password } = validatedFileds.data;
  const hashPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
  } catch {
    return { message: "Gagal buat user" };
  }
  redirect("/login");
};

// Login credential action
export const signIncCredential = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFileds = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFileds.success) {
    return {
      error: validatedFileds.error.flatten().fieldErrors,
    };
  }
  const { email, password } = validatedFileds.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/user" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Email atau password salah" };
        default:
          return { message: "Gagal login" };
      }
    }
    throw error;
  }
};

export const editUser = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  // Validasi data menggunakan Zod
  const validatedFields = EditUserSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    // Jika validasi gagal, kirimkan error
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, role } = validatedFields.data;

  // Ambil data pengguna sebelumnya dari database
  const data = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!data) return { message: "User not found" };

  // Update data pengguna
  try {
    await prisma.user.update({
      where: { id: id },
      data: {
        name,  // Update name
        email, // Update email
        role,  // Update role
      },
    });
    redirect("/dashboard");
  } catch (error) {
    console.error("Error updating user:", error);
    return { message: "Failed to update user" };
  }
};