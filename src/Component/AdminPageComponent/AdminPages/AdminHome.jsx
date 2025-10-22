import React from "react";

import footer from "./Adminfooter"
import Adminfooter from "./Adminfooter";
const AdminHome = () => {
  return (
    <>
    <div>
      <h2 className="admindash">Admin Dashboard</h2>
      <p className="admin-para">Overview of user activity, system stats, or quick analytics here.</p>
    </div>
    <Adminfooter/>
    </>
  );
};

export default AdminHome;
