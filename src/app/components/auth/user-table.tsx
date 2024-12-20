import React from "react";
import { getUsers } from "@/lib/data";

const UserTable = async() => {
  const users = await getUsers();
  if(!users?.length) return <h1 className="text-2xl">Tidak ada user</h1>
  return (
    <div className="w-full flex justify-center">
      <table className="bg-white mt-3">
        <thead className="border-b border-gray-100">
          <tr>
            <th className="py-3 px-6 text-left text-sm">Name</th>
            <th className="py-3 px-6 text-left text-sm">Emai</th>
            <th className="py-3 px-6 text-left text-sm">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
          <tr key={user.id}>
            <td className="py-3 px-6">{user.name}</td>
            <td className="py-3 px-6">{user.email}</td>
            <td className="py-3 px-6">{user.role}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
