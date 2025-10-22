import React from "react";

const Topbar = ({ user }) => {
  // Access username safely
  const username =
    user?.user?.user_name ||
    user?.user?.name ||
    user?.user_name ||
    "User";

  return (
    <>
   <div className="user-hero"> </div>
     <div className="user-heading">
      <h3 className="">
       <strong>Welcome, <span className="text-red-500">{username}</span> 👋</strong> 
      </h3>
    </div>
    
  
      </>
  );
};

export default Topbar;
