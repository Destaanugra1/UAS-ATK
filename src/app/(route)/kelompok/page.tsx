import { FocusCardsDemo } from '@/app/components/kelompok'
import { LampDemo } from '@/app/components/Lamp'
import React from 'react'

const PageKelompok = () => {
  return (
    <div className="h-[200vh] bg-slate-950">
      <div className="">
        <LampDemo />
        <FocusCardsDemo />
      </div>
    </div>
  )
}

export default PageKelompok