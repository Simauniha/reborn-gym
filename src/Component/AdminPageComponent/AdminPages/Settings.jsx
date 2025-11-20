import React, { useState, useEffect } from "react";
import "../../../Styles/AdminDashboard.css";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  // Fake Admin Settings Data
  const [settings, setSettings] = useState({
    siteName: "Reborn Fitness",
    adminEmail: "admin@reborn.com",
    dashboardTheme: "Modern",
    notifications: true,
    autoBackup: false,
  });

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Admin Settings</h2>

        {/* Theme Switch */}
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* Card */}
      <div className="settings-card fadeIn">
        <form>
          <div className="form-group">
            <label>Website Name</label>
            <input
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Admin Email</label>
            <input
              type="email"
              name="adminEmail"
              value={settings.adminEmail}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Dashboard Theme</label>
            <select
              name="dashboardTheme"
              value={settings.dashboardTheme}
              onChange={handleChange}
            >
              <option value="Modern">Modern</option>
              <option value="Classic">Classic</option>
              <option value="Premium Gold">Premium Gold</option>
            </select>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            <label>Enable Notifications</label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="autoBackup"
              checked={settings.autoBackup}
              onChange={handleChange}
            />
            <label>Enable Auto-Backup</label>
          </div>

          <button type="button" className="save-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
