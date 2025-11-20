import React, { useState, useEffect } from "react";
import "../../../Styles/UserDashboard.css"

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Sample notifications
    const data = [
      { id: 1, title: "New Class Added", message: "Yoga class scheduled at 6 PM", time: "2 mins ago", read: false },
      { id: 2, title: "Payment Successful", message: "Your monthly subscription is confirmed", time: "1 hour ago", read: false },
      { id: 3, title: "Profile Update", message: "Your profile information was updated", time: "Yesterday", read: false },
    ];
    setNotifications(data);
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 fw-bold text-dark">Notifications</h3>
      {notifications.length === 0 ? (
        <div className="alert alert-info shadow-sm">No notifications available</div>
      ) : (
        <div className="row g-3">
          {notifications.map((notif) => (
            <div key={notif.id} className="col-12 col-md-6 col-lg-4">
              <div
                className={`card shadow-sm rounded-3 p-3 border-0 ${
                  notif.read ? "bg-light text-muted" : "bg-white"
                }`}
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className={`fw-bold ${notif.read ? "text-muted" : ""}`}>
                      {notif.title}
                    </h6>
                    <p className={`mb-2 ${notif.read ? "text-muted" : ""}`}>
                      {notif.message}
                    </p>
                    <small className="text-secondary">{notif.time}</small>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {!notif.read && (
                      <button
                        className="btn btn-sm btn-gradient-primary"
                        onClick={() => markAsRead(notif.id)}
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteNotification(notif.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
