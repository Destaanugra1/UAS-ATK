"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { signUpCredential } from "@/lib/action";
import { RegisterButton } from "../button";

const FormRegister = () => {
  const [state, formActiom] = useFormState(signUpCredential, null);
  return (
    <form action={formActiom} className="space-y-6">
      {state?.message ? (
        <div className="p-4 mb-4 text-sm text-red-800 bg-red-100" role="alert">
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          placeholder="Elon Musk"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500">{state?.error?.name}</span>
        </div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          email
        </label>
        <input
          type="email"
          name="email"
          placeholder="elon1@gmail.com"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500">{state?.error?.email}</span>
        </div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          password
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500">{state?.error?.password}</span>
        </div>
        <label
          htmlFor="ConfirmPassword"
          className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="********"
          name="ConFirmPassword"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500">
            {state?.error?.ConFirmPassword}
          </span>
        </div>
        <RegisterButton />
        <p className="text-sm font-light text-gray-500">
          Apakah Sudah punya Akun?
          <Link href="/login">
            <span className="font-medium pl-1">Sign in</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
