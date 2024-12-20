"use client";
import React from "react";
import { UpluadImage } from "../../lib/action";
import { useFormState } from "react-dom";
import { SubmitButtom } from "./button";

const CreateForm = () => {
  const [state, formAction] = useFormState(UpluadImage, null);
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 rounded-sm border-gray-400"
          placeholder="nama Produk"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="description"
          className="py-2 px-4 rounded-sm border-gray-400"
          placeholder="penjelasan"
        />
      </div>
      <div aria-live="polite" aria-atomic="true">
        <p className="text-sm text-red-500 mt-2">{state?.error?.description}</p>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="number"
          name="price"
          className="py-2 px-4 rounded-sm border-gray-400"
          placeholder="Rp-Harga"
        />
      </div>
      <div aria-live="polite" aria-atomic="true">
        <p className="text-sm text-red-500 mt-2">{state?.error?.price}</p>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="filr:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full"
        />
      </div>
      <div aria-live="polite" aria-atomic="true">
        <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButtom Label="upload" />
      </div>
    </form>
  );
};

export default CreateForm;
