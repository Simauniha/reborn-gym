import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

const Reports = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [ageRange, setAgeRange] = useState([0, 100]);
  const [heightRange, setHeightRange] = useState([0, 250]);
  const [weightRange, setWeightRange] = useState([0, 200]);

  const [ageData, setAgeData] = useState([]);
  const [hwData, setHWData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [users, ageRange, heightRange, weightRange]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users");
      setUsers(res.data.users || []);
    } catch (error) {
      console.error("Error loading users", error);
    }
  };

  const applyFilters = () => {
    const filtered = users.filter((u) => {
      return (
        u.user_age >= ageRange[0] &&
        u.user_age <= ageRange[1] &&
        u.user_height >= heightRange[0] &&
        u.user_height <= heightRange[1] &&
        u.user_weight >= weightRange[0] &&
        u.user_weight <= weightRange[1]
      );
    });

    setFilteredUsers(filtered);
    prepareChartData(filtered);
  };

  const prepareChartData = (users) => {
    // Age distribution
    const ageCount = {};
    users.forEach((u) => {
      ageCount[u.user_age] = (ageCount[u.user_age] || 0) + 1;
    });

    setAgeData(
      Object.keys(ageCount).map((age) => ({
        age,
        users: ageCount[age],
      }))
    );

    // Height vs Weight
    setHWData(
      users.map((u) => ({
        height: u.user_height,
        weight: u.user_weight,
      }))
    );
  };

  const handleRangeChange = (setter, index, value) => {
    setter((prev) => {
      const newRange = [...prev];
      newRange[index] = Number(value);
      return newRange;
    });
  };

  const calculateAverage = (key) => {
    if (!filteredUsers.length) return 0;
    const total = filteredUsers.reduce((sum, u) => sum + u[key], 0);
    return (total / filteredUsers.length).toFixed(1);
  };

  return (
    <div
      className="container-fluid p-4"
      style={{
        background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
        minHeight: "100vh",
      }}
    >
      <h2
        className="fw-bold mb-4"
        style={{
          color: "var(--bg-black)",
          letterSpacing: "1px",
          textShadow: "0px 2px 3px rgba(0,0,0,0.1)",
        }}
      >
         Reports Dashboard
      </h2>

      {/* FILTER PANEL */}
      <div
        className="p-4 rounded shadow-sm mb-4"
        style={{
          background: "linear-gradient(135deg, #fff, #f3f3f3)",
          borderLeft: "5px solid var(--accent-red)",
          animation: "fadeIn 0.7s ease",
        }}
      >
        <h5 className="fw-bold mb-3" style={{ color: "var(--bg-black)" }}>
          Filters
        </h5>

        <div className="row g-4">
          {/* Age */}
          <div className="col-md-4">
            <label className="form-label fw-semibold">
              Age Range: {ageRange[0]} – {ageRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={ageRange[0]}
              className="form-range"
              onChange={(e) => handleRangeChange(setAgeRange, 0, e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={ageRange[1]}
              className="form-range"
              onChange={(e) => handleRangeChange(setAgeRange, 1, e.target.value)}
            />
          </div>

          {/* Height */}
          <div className="col-md-4">
            <label className="form-label fw-semibold">
              Height Range: {heightRange[0]} – {heightRange[1]} cm
            </label>
            <input
              type="range"
              min="0"
              max="250"
              value={heightRange[0]}
              className="form-range"
              onChange={(e) =>
                handleRangeChange(setHeightRange, 0, e.target.value)
              }
            />
            <input
              type="range"
              min="0"
              max="250"
              value={heightRange[1]}
              className="form-range"
              onChange={(e) =>
                handleRangeChange(setHeightRange, 1, e.target.value)
              }
            />
          </div>

          {/* Weight */}
          <div className="col-md-4">
            <label className="form-label fw-semibold">
              Weight Range: {weightRange[0]} – {weightRange[1]} kg
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={weightRange[0]}
              className="form-range"
              onChange={(e) =>
                handleRangeChange(setWeightRange, 0, e.target.value)
              }
            />
            <input
              type="range"
              min="0"
              max="200"
              value={weightRange[1]}
              className="form-range"
              onChange={(e) =>
                handleRangeChange(setWeightRange, 1, e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="row g-4 mb-4">
        {[
          {
            title: "Total Users",
            value: filteredUsers.length,
          },
          {
            title: "Average Age",
            value: calculateAverage("user_age"),
          },
          {
            title: "Average Height",
            value: calculateAverage("user_height"),
          },
          {
            title: "Average Weight",
            value: calculateAverage("user_weight"),
          },
        ].map((card, idx) => (
          <div className="col-md-3" key={idx}>
            <div
              className="p-4 rounded shadow-sm text-center"
              style={{
                background: "white",
                border: "1px solid #eee",
                borderBottom: "4px solid var(--accent-red)",
                transition: "0.3s",
                animation: "fadeInUp 0.8s ease",
              }}
            >
              <h6 className="fw-bold">{card.title}</h6>
              <h3 className="fw-bold" style={{ color: "var(--accent-red)" }}>
                {card.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* AGE DISTRIBUTION */}
      <div
        className="p-4 rounded shadow-sm mb-4"
        style={{
          background: "#fff",
          animation: "fadeIn 1s ease",
        }}
      >
        <h5 className="fw-bold mb-3">Age Distribution</h5>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="var(--accent-red)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* HEIGHT vs WEIGHT */}
      <div
        className="p-4 rounded shadow-sm"
        style={{
          background: "#fff",
          animation: "fadeIn 1.2s ease",
        }}
      >
        <h5 className="fw-bold mb-3">Height vs Weight</h5>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="height" name="Height" unit="cm" />
            <YAxis type="number" dataKey="weight" name="Weight" unit="kg" />
            <Tooltip />
            <Scatter data={hwData} fill="var(--accent-red)" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
