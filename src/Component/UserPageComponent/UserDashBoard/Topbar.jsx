import React from "react";

const Topbar = ({ user }) => {
  // Access username safely
  const username =
    user?.user?.user_name ||
    user?.user?.name ||
    user?.user_name ||
    "User";

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-md border-b border-gray-800 py-5 px-8 flex justify-start items-center">
      <h3 className="text-2xl font-semibold text-white tracking-wide">
        Welcome, <span className="text-red-500">{username}</span> 👋
      </h3>
    </div>
  );
};

export default Topbar;
