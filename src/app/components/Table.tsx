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

export const TableData = ({ data }: { data: Upload[] }) => {
  return (
    <div>
      <Table className="border">
        <TableCaption>Belanja Puas Harga Pas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>title</TableHead>
            <TableHead>description</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="">image</TableHead>
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
                  className="object-cover"
                  height={50}
                  src={item.image}
                  width={50} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
