import FormRegister from '@/app/components/auth/form-register'

const Register = () => {
  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-xl font-bold text-gray-900'>create an account</h1>
      <FormRegister />
    </div>
  )
}

export default Register