"use client";

import React from "react";
import { editUser } from "../../lib/action"; // Fungsi editUser Anda
import { useFormState } from "react-dom"; // Mengelola state formulir
import type { User } from "@prisma/client"; // Model User dari Prisma
import { SubmitButtom } from "./button";
import { useRouter } from "next/navigation";

const EditUser = ({ data }: { data: User }) => {
  const router = useRouter();
  const [state, formAction] = useFormState(editUser.bind(null, data.id), null);
  if(!data) {
    return <div>User not found</div>
  }

if (state && !("error" in state)) {
  // Redirect setelah berhasil
  router.push("/dashboard");
}

  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="name"
          className="py-2 px-4 rounded-sm border-gray-400"
          placeholder="Name"
          defaultValue={data.name || ""}
          
        />
        <div aria-live="polite" aria-atomic="true">
          {/* <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p> */}
        </div>
      </div>

      <div className="mb-4 pt-2">
        <input
          type="email"
          name="email"
          className="py-2 px-4 rounded-sm border-gray-400"
          placeholder="Email"
          defaultValue={data.email || ""}
          
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">
            {(state && "error" in state && state.error?.email?.[0]) || ""}
          </p>
        </div>
      </div>

      {/* Input untuk Role */}
      <div className="mb-4 pt-2">
        <select
          name="role"
          className="py-2 px-4 rounded-sm border-gray-400"
          defaultValue={data.role}
          >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div aria-live="polite" aria-atomic="true">
        <p className="text-sm text-red-500 mt-2">
            {(state && "error" in state && state.error?.email?.[0]) || ""}
          </p>
        </div>
      </div>

      {/* Tombol Submit */}
      <div className="mb-4 pt-4">
      <SubmitButtom Label="edit" />
      </div>
    </form>
  );
};

export default EditUser;
