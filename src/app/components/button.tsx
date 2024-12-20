"use client";
import { deleteImage } from "@/lib/action";
import { clsx } from "clsx";
import Link from "next/link";
import { useFormStatus } from "react-dom";

export const SubmitButtom = ({ Label }: { Label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-blue-700 text-white w-full font-medium py-2.5 px-6 text-base rounded-sm hover:bg-blue-600",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
      type="submit"
      disabled={pending}>
      {Label === "upload" ? (
        <>{pending ? "uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditButtom = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="py-2 p-2 text-sm bg-blue-600 rounded-bl-md text-center w-full hover:bg-blue-300"
    >
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const handleDeleteAction = async (formData: FormData) => {
    const imageId = formData.get("id") as string;
    if (!imageId) return;

    const result = await deleteImage(imageId);
    if (result?.message) {
      console.error(result.message); // Anda bisa menambahkan notifikasi atau log sesuai kebutuhan
    }
  };

  return (
    <form
      action={handleDeleteAction}
      method="post"
      className="py-2 p-2 text-sm bg-red-600 rounded  hover:bg-red-400 text-center"
    >
      <input type="hidden" name="id" value={id} />
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Deleting.." : "Delete"}
    </button>
  );
};

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
    disabled={pending}
    type="submit"
    className="w-full bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800 text-white mt-4">
    {pending ? "Registering..." : "Register"}
  </button>
  )
}
export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
    disabled={pending}
    type="submit"
    className="w-full bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800 text-white mt-4">
    {pending ? "Loading..." : "Login"}
  </button>
  )
}
