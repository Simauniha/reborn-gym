import React from "react";


const AdminTopbar = ({ admin }) => {
  return (
    <>
     <div className="admin-hero"> </div>
   <div className="admin-heading">
      <h3 className=""><strong>Welcome {admin?.user_name || "Admin"}</strong> </h3>
      <h2 className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque suscipit in expedita?<br/> Veritatis cupiditate a expedita, totam iusto sunt soluta dolorum modi possimus officiis quaerat consequatur aliquam deserunt eaque sequi. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore ipsa accusantium laboriosam?<br/> Mollitia labore consequatur harum odio? Consequatur cum expedita sint aperiam, dolorum ipsum debitis sunt sed vel magnam!</h2>
      <button className="logout-btn">
      <h1> Logout</h1> 
      </button></div>
 
    </>
  );
};

export default AdminTopbar;
