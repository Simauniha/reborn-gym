import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found, please login again");
      return;
    }

    axios
      .get("http://localhost:8000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setError("Failed to load profile");
        }
      })
      .catch((err) => {
        console.error("Profile fetch error:", err);
        setError("Error fetching profile");
      });
  }, []);

  if (error) return <p className="text-danger text-center mt-4">{error}</p>;
  if (!user) return <p className="text-center mt-4">Loading your profile...</p>;

  return (
    <div className="container-fluid py-5">
      <h2 className="user-info" style={{ color: "#ffffff" }}>Your Profile</h2>

      {/* <div className="user-detail p-3 rounded shadow-sm" style={{ backgroundColor: "#ffffff" }}> */}
      <div className="user-detail p-3 rounded shadow-sm">
        <p className="detail-list text-white p-2 rounded"><strong>Name:</strong> {user.user_name}</p>
        <p className="detail-list text-white p-2 rounded"><strong>Email:</strong> {user.user_email}</p>
        <p className="detail-list text-white p-2 rounded"><strong>Phone:</strong> {user.user_phone}</p>
        <p className="detail-list text-white p-2 rounded"><strong>Age:</strong> {user.user_age}</p>
        <p className="detail-list text-white p-2 rounded"><strong>Height:</strong> {user.user_height} cm</p>
        <p className="detail-list text-white p-2 rounded"><strong>Weight:</strong> {user.user_weight} kg</p>

        {user.user_profileImage && (
          <div className="mt-3 text-center">
            <strong>Profile Image:</strong>
            <div className="mt-2">
              <img
                src={`http://localhost:8000/uploads/${user.user_profileImage}`}
                alt="Profile"
                className="rounded-circle border"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
