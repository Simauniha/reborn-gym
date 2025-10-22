import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const active = (path) => location.pathname === path ? "bg-blue-600 text-white" : "text-gray-700";

  return (
    <>
    <nav className=" admin-nav flex flex-col gap-3">
      <div className="row">
        <div className="col-sm-2"></div>
    <div className="admin  col-sm-4">
      <div  className="admin-logo"><img src="rebprn.jpg"></img></div>
          
      <h2 className=" admin-title"><strong>Admin Panel</strong></h2></div>
        <div className="col-sm-4">
        <ul className=" admin-nav list-unstyled d-flex gap-5">

       <li className="admin-list"> <Link to="/adminDashboard" className="list">Dashboard</Link></li>
       <li className="admin-list"> <Link to="/adminDashboard/users" className="list2">Manages</Link></li>
     <li className="admin-list">  <Link to="/adminDashboard/reports" className="list3">Reports</Link></li> 
     <li className="admin-list"> <Link to="/adminDashboard/settings" className="list4"> Settings</Link></li>  </ul>
     
    </div>
     <div className="col-sm-2"></div>
    
     </div>
     </nav>
    </>
  );
};

export default AdminSidebar;
