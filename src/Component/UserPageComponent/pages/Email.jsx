import React, { useState, useEffect } from "react";
import "../../../Styles/UserDashboard.css"

const Email = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Sample emails
    const data = [
      { id: 1, sender: "Admin", subject: "Membership Renewal", snippet: "Your gym membership is due for renewal.", time: "10 mins ago", read: false },
      { id: 2, sender: "Trainer", subject: "Workout Plan Update", snippet: "Your new workout plan is ready.", time: "2 hours ago", read: false },
      { id: 3, sender: "Support", subject: "Feedback Received", snippet: "Thanks for your feedback on our services.", time: "Yesterday", read: true },
    ];
    setEmails(data);
  }, []);

  const markAsRead = (id) => {
    setEmails((prev) =>
      prev.map((email) => (email.id === id ? { ...email, read: true } : email))
    );
  };

  const markAsUnread = (id) => {
    setEmails((prev) =>
      prev.map((email) => (email.id === id ? { ...email, read: false } : email))
    );
  };

  const deleteEmail = (id) => {
    setEmails((prev) => prev.filter((email) => email.id !== id));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 fw-bold text-dark">Inbox</h3>
      {emails.length === 0 ? (
        <div className="alert alert-info shadow-sm">No emails available</div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {emails.map((email) => (
            <div key={email.id}>
              <div
                className={`card shadow-sm rounded-3 p-4 border-0 ${
                  email.read ? "bg-light text-muted" : "bg-white"
                }`}
              >
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div className="flex-grow-1">
                    <h5 className={`fw-bold ${email.read ? "text-muted" : ""}`}>
                      {email.subject}
                    </h5>
                    <p className={`mb-2 ${email.read ? "text-muted" : ""}`}>
                      <strong>{email.sender}:</strong> {email.snippet}
                    </p>
                    <small className="text-secondary">{email.time}</small>
                  </div>
                  <div className="d-flex flex-column gap-2 ms-3 mt-2 mt-md-0">
                    {!email.read ? (
                      <button
                        className="btn btn-sm btn-gradient-primary"
                        onClick={() => markAsRead(email.id)}
                      >
                        Mark as Read
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => markAsUnread(email.id)}
                      >
                        Mark as Unread
                      </button>
                    )}
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteEmail(email.id)}
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

export default Email;
