"use client"
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import type { Upload } from "@prisma/client";
import Image from "next/image";
import {  EditButtom } from "./button";
import { HandleDeleteProduct } from "./AlertDialog";

export const TableData = ({ data }: { data: Upload[] }) => {
  return (
    <div className="w-full overflow-auto">
        <Table className="border w-full">
          <TableCaption>Belanja Puas Harga Pas</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">id</TableHead>
              <TableHead>title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>image</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Image
                    alt={item.title}
                    className="object-cover rounded"
                    height={50}
                    src={item.image}
                    width={50}
                  />
                </TableCell>
                <TableCell className="flex gap-4 text-white">
                  <EditButtom id={item.id} />
                  <HandleDeleteProduct id={item.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  );
};
