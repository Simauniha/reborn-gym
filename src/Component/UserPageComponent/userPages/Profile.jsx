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
      .get("http://localhost:8000/api/users/profile", {
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

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Loading your profile...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.user_name}</p>
        <p><strong>Email:</strong> {user.user_email}</p>
        <p><strong>Phone:</strong> {user.user_phone}</p>
        <p><strong>Age:</strong> {user.user_age}</p>
        <p><strong>Height:</strong> {user.user_height} cm</p>
        <p><strong>Weight:</strong> {user.user_weight} kg</p>
        {user.user_profileImage && (
          <div>
            <strong>Profile Image:</strong><br />
            <img
              src={`http://localhost:8000/uploads/${user.user_profileImage}`}
              alt="Profile"
              className="w-32 h-32 rounded-full border mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
