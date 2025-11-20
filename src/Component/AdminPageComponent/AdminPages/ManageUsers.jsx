import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../../Styles/AdminDashboard.css";

const MySwal = withReactContent(Swal);

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_age: "",
    user_height: "",
    user_weight: "",
  });

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users");
      setUsers(res.data.users);
    } catch (error) {
      console.error(error);
      MySwal.fire({
        title: "Error",
        text: "Failed to fetch users",
        icon: "error",
        confirmButtonColor: "var(--accent-red)",
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { user_name, user_email, user_phone, user_age, user_height, user_weight } = formData;

    if (!user_name.trim()) {
      MySwal.fire({ title: "Validation Error", text: "Name cannot be empty", icon: "warning", confirmButtonColor: "var(--accent-red)" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      MySwal.fire({ title: "Validation Error", text: "Invalid email format", icon: "warning", confirmButtonColor: "var(--accent-red)" });
      return false;
    }

    if (!/^\d{10}$/.test(user_phone)) {
      MySwal.fire({ title: "Validation Error", text: "Phone number must be 10 digits", icon: "warning", confirmButtonColor: "var(--accent-red)" });
      return false;
    }

    if (user_age <= 0 || isNaN(user_age)) {
      MySwal.fire({ title: "Validation Error", text: "Age must be a positive number", icon: "warning", confirmButtonColor: "var(--accent-red)" });
      return false;
    }

    if (user_height <= 0 || isNaN(user_height)) {
      MySwal.fire({ title: "Validation Error", text: "Height must be a positive number", icon: "warning", confirmButtonColor: "var(--accent-red)" });
      return false;
    }

    if (user_weight <= 0 || isNaN(user_weight)) {
      MySwal.fire({ title: "Validation Error", text: "Weight must be a positive number", icon: "warning", confirmButtonColor: "var(--accent-red)" });
      return false;
    }

    return true;
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setFormData({
      user_name: user.user_name,
      user_email: user.user_email,
      user_phone: user.user_phone,
      user_age: user.user_age,
      user_height: user.user_height,
      user_weight: user.user_weight,
    });
  };

  const handleUpdate = async () => {
    if (!validateForm()) return;

    try {
      const res = await axios.put(
        `http://localhost:8000/api/users/${editUser._id}`,
        formData
      );
      MySwal.fire({
        title: "Success",
        text: res.data.message,
        icon: "success",
        confirmButtonColor: "var(--accent-red)",
      });
      setEditUser(null);
      fetchUsers();
    } catch (error) {
      console.error(error);
      MySwal.fire({
        title: "Error",
        text: error.response?.data?.message || "Failed to update user",
        icon: "error",
        confirmButtonColor: "var(--accent-red)",
      });
    }
  };

  const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--accent-red)",
      cancelButtonColor: "var(--dark-gray)",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`http://localhost:8000/api/users/${id}`);
          MySwal.fire({
            title: "Deleted!",
            text: res.data.message,
            icon: "success",
            confirmButtonColor: "var(--accent-red)",
          });
          fetchUsers();
        } catch (error) {
          console.error(error);
          MySwal.fire({
            title: "Error",
            text: error.response?.data?.message || "Failed to delete user",
            icon: "error",
            confirmButtonColor: "var(--accent-red)",
          });
        }
      }
    });
  };

  return (
    <div className="container mt-5 manage-users-page">
      <h2 className="mb-4">Edit Users Details</h2>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-user align-middle mb-0 bg-white">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Height</th>
              <th>Weight</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.user_name}</td>
                <td>{user.user_email}</td>
                <td>{user.user_phone}</td>
                <td>{user.user_age}</td>
                <td>{user.user_height}</td>
                <td>{user.user_weight}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editUser && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <h5 className="mb-3">Edit User</h5>
              {["user_name", "user_email", "user_phone", "user_age", "user_height", "user_weight"].map(
                (field) => (
                  <div className="mb-2" key={field}>
                    <label className="form-label text-capitalize">{field.replace("_", " ")}</label>
                    <input
                      type="text"
                      name={field}
                      className="form-control"
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </div>
                )
              )}
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-secondary me-2" onClick={() => setEditUser(null)}>Cancel</button>
                <button className="btn btn-success" onClick={handleUpdate}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
