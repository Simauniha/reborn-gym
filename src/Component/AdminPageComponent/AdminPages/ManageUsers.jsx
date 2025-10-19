import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users") // your backend route
      .then((res) => {
        if (res.data.success) {
          setUsers(res.data.users);
        }
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Sr No.</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Height</th>
            <th className="p-2 border">Weight</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u._id || index} className="hover:bg-gray-100">
              <td className="p-2 border text-center">{index + 1}</td>
              <td className="p-2 border">{u.user_name}</td>
              <td className="p-2 border">{u.user_email}</td>
              <td className="p-2 border">{u.user_phone}</td>
              <td className="p-2 border">{u.user_age}</td>
              <td className="p-2 border">{u.user_height}</td>
              <td className="p-2 border">{u.user_weight}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 px-2 py-1 rounded m-2 hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 px-2 py-1 m-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
