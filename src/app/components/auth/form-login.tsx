"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { signIncCredential } from "@/lib/action";
import { LoginButton } from "../button";

const FormLogin= () => {
  const [state, formActiom] = useFormState(signIncCredential, null);
  return (
    <form action={formActiom} className="space-y-6">
      {state?.message ? (
        <div className="p-4 mb-4 text-sm text-red-800 bg-red-100" role="alert">
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}
      <div>
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
        <LoginButton />
        <p className="text-sm font-light text-gray-500">
          Apakah Belum Punya akun?
          <Link href="/register">
            <span className="font-medium pl-1 text-blue-600">Sign in</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
