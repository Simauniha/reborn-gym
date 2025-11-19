import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgSmileMouthOpen } from "react-icons/cg";
import "../../../Styles/UserDashboard.css"
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({
    user_name: "",
    user_height: "",
    user_weight: "",
    user_age: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (error) {
        console.error("Home profile fetch error:", error);
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <div className="home-container">

      {/* HEADER */}
      <div className="home-header">
        <h2>Welcome Back, <span>{user.user_name}</span> <CgSmileMouthOpen /></h2>
        <p>Your fitness dashboard at a glance</p>
      </div>

      {/* TOP CARDS */}
      <div className="home-stats-grid">

        <div className="home-card">
          <h3>Height</h3>
          <p>{user.user_height ? `${user.user_height} cm` : "—"}</p>
        </div>

        <div className="home-card">
          <h3>Weight</h3>
          <p>{user.user_weight ? `${user.user_weight} kg` : "—"}</p>
        </div>

        <div className="home-card">
          <h3>Age</h3>
          <p>{user.user_age ? `${user.user_age} yrs` : "—"}</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="quick-action-container">
        <h3 className="section-title2" style={{color:"black"}}>Quick Actions</h3>

        <div className="quick-action-grid">
          <Link to="/userDashboard/exercise" className="quick-action-btn">Exercise Plan </Link>
          <Link to="/userDashboard/diet_plan" className="quick-action-btn">Diet Plan </Link>
          <Link to="/userDashboard/analysis" className="quick-action-btn">Analysis </Link>
          <Link to="/userDashboard/setting" className="quick-action-btn">Settings</Link>
        </div>
      </div>

      {/* DAILY SUMMARY */}
      <div className="daily-summary-card">
        <h3 className="section-title2">Today's Summary</h3>

        <ul>
          <li>No workout logged today</li>
          <li>No meals tracked</li>
          <li>Water intake: 0 / 8 glasses</li>
        </ul>

        <p className="note">Tracking features can be connected later.</p>
      </div>

    </div>
  );
};

export default Home;
