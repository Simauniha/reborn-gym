import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Styles/AdminDashboard.css";

function AdminHome() {
  const [users, setUsers] = useState([]);

  // Fetch Real Users
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        console.log("API Response:", res.data);
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  // Fake Gym Stats
  const gymStats = {
    trainers: 12,
    equipment: 48,
    plans: 9,
    monthlyRevenue: "₹72,000",
  };

  return (
    <div className="admin-home-container">
      
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>Welcome Admin</h1>
        <p>Here's your gym overview for today</p>
      </div>

      {/* Gym Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{gymStats.trainers}</h3>
          <p>Active Trainers</p>
        </div>

        <div className="stat-card">
          <h3>{users.length}</h3>
          <p>Active Members</p>
        </div>

        <div className="stat-card">
          <h3>{gymStats.equipment}</h3>
          <p>Total Equipment</p>
        </div>

        <div className="stat-card">
          <h3>{gymStats.plans}</h3>
          <p>Membership Plans</p>
        </div>

        <div className="stat-card">
          <h3>{gymStats.monthlyRevenue}</h3>
          <p>Monthly Revenue</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="user-section">
        <h2>Recent Members</h2>

        {users.length === 0 ? (
          <p>No users found...</p>
        ) : (
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Weight</th>
              </tr>
            </thead>

            <tbody>
              {users.slice(0, 5).map((u) => (
                <tr key={u._id}>
                  <td>{u.user_name}</td>
                  <td>{u.user_email}</td>
                  <td>{u.user_phone}</td>
                  <td>{u.user_age}</td>
                  <td>{u.user_weight} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default AdminHome;
