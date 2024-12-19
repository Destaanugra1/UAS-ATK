import { TableData } from "@/app/components/Table";
import { getImages } from "@/lib/data";
import Link from "next/link";

export default async function Dashboard() {
  const data = await getImages();
  return (
    <>
      <div className="">
        <div className="text-end  rounded-md p-2 text-white">
          <Link
            className="bg-blue-700 p-2 hover:bg-blue-500 transition rounded"
            href="/dashboard/create">
            Tambah Barang
          </Link>
        </div>
        <div className="mt-4">
          <TableData data={data} />
        </div>
      </div>
    </>
  );
}
