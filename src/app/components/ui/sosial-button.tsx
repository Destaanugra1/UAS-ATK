import {IoLogoGoogle, IoLogoGithub} from "react-icons/io5"
import { signIn } from "../../../../auth"

export const GoogleButton = () => {
  return (
    <form action={async() =>{
      "use server";
      await signIn("google", {callbackUrl: "/"})
    }}>
      <button type="submit" className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-blue-500 w-full">
        <IoLogoGoogle />
        Login dengan Google
      </button>
    </form>
  )
}

export const GithubButton = () => {
  return (
    <form action={async() =>{
      "use server";
      await signIn("github", {callbackUrl: "/"})
    }}>
      <button type="submit" className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-gray-500 w-full">
        <IoLogoGithub />
        Login dengan Github
      </button>
    </form>
  )
}