import { TableData } from '@/app/components/Table'
import React from 'react'
import { getImages } from '@/app/lib/data'

const TablePAge = async () => {
  const data = await getImages()
  return (
    <div>
      <TableData data={data} />
    </div>
  )
}

export default TablePAge