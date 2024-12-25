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
import { DeleteButton, EditButtom } from "./button";

export const TableData = ({ data }: { data: Upload[] }) => {
  return (
    <div className="flex">
      <Table className="border justify-center ">
        <TableCaption>Belanja Puas Harga Pas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="">image</TableHead>
            <TableHead className="">Action</TableHead>
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
                  width={50} />
              </TableCell>
                <TableCell className="flex space-x-2 text-white">
                  <EditButtom id={item.id}/>
                  <DeleteButton id={item.id} />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
