import Footer from "../components/FooterComp"
import NavUser from "../components/NavUser"

const AuthLAyout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    <NavUser />
    <div className="bg-gary-100">
      <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto h-screen">
        <div className="w-full bg-white rounded-lg shadow mt-0 max-w-md">
          {children}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AuthLAyout