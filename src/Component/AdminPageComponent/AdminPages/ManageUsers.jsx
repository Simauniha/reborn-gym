import React from "react";

const ManageUsers = () => {
  const dummyUsers = [
    { id: 1, name: "Gauri", email: "gauri@example.com" },
    { id: 2, name: "Riya", email: "riya@example.com" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((u) => (
            <tr key={u.id} className="hover:bg-gray-100">
              <td className="p-2 border">{u.id}</td>
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
