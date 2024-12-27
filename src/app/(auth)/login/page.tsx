import FormLogin from "@/app/components/auth/form-login"
import { FacebookButton, GithubButton, GoogleButton } from "@/app/components/ui/sosial-button"

const Login = () => {
  return (
    <>
      
    <div className='p-6 space-y-4'>
    <h1 className='text-xl font-bold text-gray-900'>Login Untuk Akun</h1>
    <FormLogin />
    <div className="my-4 flex -item-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
    <p className="mx-4 mb-0 text-center font-semibold text-gray-600">or</p>
    </div>
    <GoogleButton />
    <GithubButton />
    <FacebookButton />
  </div>
  </>
  )
}

export default Login