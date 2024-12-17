import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen bg-bluee'>
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "bg-slate-500 hover:bg-slate-400 text-sm",
        }
      }}
    />
    </div>
    </>
  );
}