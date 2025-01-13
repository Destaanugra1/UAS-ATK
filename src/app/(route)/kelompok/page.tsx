import { FocusCardsDemo } from '@/app/components/kelompok'
import { LampDemo } from '@/app/components/Lamp'



const PageKelompok = () => {

  return (
    <div className="h-[200vh] bg-slate-950">
      <div className="">
        <LampDemo />
        <div className="mb-20">
        <FocusCardsDemo />
        </div>
      </div>
    </div>
  )
}

export default PageKelompok