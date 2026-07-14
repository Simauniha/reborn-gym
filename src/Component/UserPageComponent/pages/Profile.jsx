import "../../../Styles/UserDashboard.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaDumbbell, FaFireAlt, FaUser } from "react-icons/fa";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found — please login again.");
      return;
    }

    axios
      .get("http://localhost:8000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data && res.data.success) {
          setUser(res.data.user);
        } else if (res.data && !res.data.success) {
          setError(res.data.message || "Failed to load profile");
        } else {
          setError("Failed to load profile");
        }
      })
      .catch((err) => {
        console.error("Profile fetch error:", err);
        setError("Error fetching profile");
      });
  }, []);

  // helpers
  const getMemberSince = (u) => {
    // try common created_at/createdAt fields, else fallback
    const dateStr = u?.created_at || u?.createdAt || u?.joined || u?.member_since;
    if (!dateStr) return "—";
    try {
      const d = new Date(dateStr);
      if (isNaN(d)) return dateStr;
      return d.getFullYear();
    } catch {
      return dateStr;
    }
  };

  const computeBMI = (weightKg, heightCm) => {
    if (!weightKg || !heightCm) return null;
    const h = Number(heightCm) / 100;
    if (h <= 0) return null;
    const bmi = Number(weightKg) / (h * h);
    return Math.round(bmi * 10) / 10; // one decimal
  };

  if (error)
    return <p className="pr-error text-center mt-4">{error}</p>;
  if (!user) return <p className="pr-loading text-center mt-4">Loading your profile...</p>;

  const bmi = computeBMI(user.user_weight, user.user_height);

  return (
    <div className="pr-wrapper">
      <div className="pr-banner">
        <img
          className="pr-profile-img"
          src={
            user.user_profileImage
              ? `http://localhost:8000/uploads/${user.user_profileImage}`
              : "/default-user.png"
          }
          alt={user.user_name || "User"}
        />

        <div className="pr-banner-info">
          <h2 className="pr-name">{user.user_name || "Unnamed User"}</h2>
          <h4 className="pr-sub">Member since: {getMemberSince(user) || "2025"}</h4>
          <div className="pr-meta">
            <span className="pr-meta-item">Email: {user.user_email || "—"}</span>
            <span className="pr-meta-item">Phone: {user.user_phone || "—"}</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="pr-stats">
        <div className="pr-stat-card">
          <i className="pr-stat-icon"><FaDumbbell /></i>
          <div className="pr-stat-title">Height</div>
          <div className="pr-stat-value">{user.user_height ? `${user.user_height} cm` : "—"}</div>
        </div>

        <div className="pr-stat-card">
          <i className="pr-stat-icon"><FaFireAlt /></i>
          <div className="pr-stat-title">Weight</div>
          <div className="pr-stat-value">{user.user_weight ? `${user.user_weight} kg` : "—"}</div>
        </div>

        <div className="pr-stat-card">
          <i className="pr-stat-icon"><FaUser /></i>
          <div className="pr-stat-title">Age</div>
          <div className="pr-stat-value">{user.user_age || "—"}</div>
        </div>
      </div>

      {/* Details */}
      <div className="pr-details">
        <h3 className="pr-details-title">Personal Information</h3>

        <div className="pr-details-grid">
          <div className="pr-details-item">
            <div className="pr-details-label">Full name</div>
            <div className="pr-details-value">{user.user_name || "—"}</div>
          </div>

          <div className="pr-details-item">
            <div className="pr-details-label">Email</div>
            <div className="pr-details-value">{user.user_email || "—"}</div>
          </div>

          <div className="pr-details-item">
            <div className="pr-details-label">Phone</div>
            <div className="pr-details-value">{user.user_phone || "—"}</div>
          </div>

          <div className="pr-details-item">
            <div className="pr-details-label">Age</div>
            <div className="pr-details-value">{user.user_age || "—"}</div>
          </div>

          <div className="pr-details-item">
            <div className="pr-details-label">Height</div>
            <div className="pr-details-value">{user.user_height ? `${user.user_height} cm` : "—"}</div>
          </div>

          <div className="pr-details-item">
            <div className="pr-details-label">Weight</div>
            <div className="pr-details-value">{user.user_weight ? `${user.user_weight} kg` : "—"}</div>
          </div>

          <div className="pr-details-item">
            <div className="pr-details-label">BMI</div>
            <div className="pr-details-value">{bmi ? bmi : "—"}</div>
          </div>

          <div className="pr-details-item">
            <div className="pr-details-label">Level</div>
            <div className="pr-details-value">{user.level || user.user_level || "—"}</div>
          </div>
        </div>

        <button className="pr-edit-btn">Edit Profile</button>
      </div>
    </div>
  );
}
export default Profile;