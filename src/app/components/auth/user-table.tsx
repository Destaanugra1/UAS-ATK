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
import { DeleteButtonUser, EditButtomUser } from "../button";

const UserTable = async () => {
  const users = await getUsers();
  if (!users?.length) return <h1 className="text-2xl">Tidak ada user</h1>;

  return (
    <div className="ml-64 flex-1 p-8">
      <div className="rounded-lg bg-white shadow">
        <Table>
          <TableCaption>Belanja Puas Harga Pas</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="flex space-x-2">
                  <EditButtomUser id={user.id} />
                  <DeleteButtonUser id={user.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;
