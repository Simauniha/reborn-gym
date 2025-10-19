import React from "react";

const AdminTopbar = ({ admin }) => {
  return (
    <div className="w-full bg-white shadow-md p-3 flex justify-between items-center">
      <h3 className="text-lg font-semibold">Welcome, {admin?.user_name || "Admin"} 👑</h3>
      <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default AdminTopbar;
