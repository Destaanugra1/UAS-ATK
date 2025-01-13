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
import { HandleDeleteUser } from "../AlertDialog";
import { EditButtomUser } from "../button";

const UserTable = async () => {
  const users = await getUsers();

  if (!users?.length) {
    return (
      <div className="ml-64 flex-1 p-8">
        <div className="flex h-40 items-center justify-center rounded-lg bg-white text-gray-500">
          <h1 className="text-2xl font-medium">Tidak ada user</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-64 flex-1 p-8">
      <div className="overflow-hidden rounded-lg border-2 bg-white shadow-md">
        <Table>
          <TableCaption className="text-base font-medium text-red-600">
            Data User
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-50 border-b-2">
              <TableHead className="w-[100px] py-4 text-sm font-semibold text-gray-900 border-r-2">
                Name
              </TableHead>
              <TableHead className="py-4 text-sm font-semibold text-gray-900 border-r-2">
                Email
              </TableHead>
              <TableHead className="py-4 text-sm font-semibold text-gray-900 border-r-2">
                Role
              </TableHead>
              <TableHead className="w-[100px] py-4 text-sm font-semibold text-gray-900">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                className="transition-colors hover:bg-gray-50 border-b-2"
              >
                <TableCell className="py-4 font-medium text-gray-900 border-r-2">
                  {user.name}
                </TableCell>
                <TableCell className="py-4 text-gray-600 border-r-2">{user.email}</TableCell>
                <TableCell className="py-4 text-gray-600 border-r-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {user.role}
                  </span>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex space-x-2">
                    <div className="text-white"></div>
                    <EditButtomUser id={user.id} />
                    <HandleDeleteUser id={user.id} />
                  </div>
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