"use client";
import { clsx } from "clsx";
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
      disabled={pending}
    >
      {Label === "upload" ? (
        <>{pending ? "uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "updating..." : "Update"}</>
      )}
    </button>
  );
};
