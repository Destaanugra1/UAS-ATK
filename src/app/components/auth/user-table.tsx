import React from "react";
import { getUsers } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { EditButtomUser } from "../button";

const UserTable = async () => {
  const users = await getUsers();
  if (!users?.length) return <h1 className="text-2xl">Tidak ada user</h1>;
  return (
    <div className="flex">
      <Table className="border justify-center">
        <TableCaption>Belanja Puas Harga Pas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex space-x-2 text-white">
                <EditButtomUser id={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
