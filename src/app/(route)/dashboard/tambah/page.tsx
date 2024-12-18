import Link from 'next/link'
import React from 'react'

const AddProduct = () => {
  return (
    <div className='text-end'>
      <Link className='' href="/dashboard/create">Tambah Barang</Link>
    </div>
  )
}

export default AddProduct