import { TableData } from "@/app/components/Table";
import { getImages } from "@/app/lib/data"


export default async function  Dashboard () {

  const data = await getImages();
  return (
    <>
      <div className="">
        <TableData data={data} />
      </div>
    </>
  )
}