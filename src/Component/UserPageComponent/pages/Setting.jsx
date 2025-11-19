import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "../../../Styles/UserDashboard.css"

const Setting = () => {
    const token = localStorage.getItem("token");

    const [profileData, setProfileData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_age: "",
        user_height: "",
        user_weight: "",
    });

    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setProfileData(response.data.user);
            } catch (error) {
                console.error("Profile Fetch Error:", error);
            }
        };
        fetchProfile();
    }, [token]);

    const validateProfile = () => {
        if (!profileData.user_name.trim()) return "Name is required";
        if (!profileData.user_email.includes("@")) return "Invalid email address";
        if (profileData.user_phone.length !== 10) return "Phone must be 10 digits";
        if (profileData.user_age < 10 || profileData.user_age > 100)
            return "Age must be between 10 and 100";
        if (profileData.user_height < 50 || profileData.user_height > 250)
            return "Height must be between 50cm and 250cm";
        if (profileData.user_weight < 20 || profileData.user_weight > 250)
            return "Weight must be between 20kg and 250kg";
        return null;
    };
    const handleProfileUpdate = async (e) => {
        e.preventDefault();

        const error = validateProfile();
        if (error) {
            Swal.fire("Validation Error", error, "warning");
            return;
        }

        try {
            const formData = new FormData();
            Object.keys(profileData).forEach((key) =>
                formData.append(key, profileData[key])
            );
            if (profileImage) formData.append("user_profileImage", profileImage);

            const response = await axios.put(
                "http://localhost:8000/api/user/update-profile",
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            Swal.fire("Success", response.data.message, "success");
        } catch (error) {
            Swal.fire(
                "Error",
                error.response?.data?.message || "Failed to update profile",
                "error"
            );
        }
    };

    const validatePassword = (oldPass, newPass) => {
        if (!oldPass || oldPass.length < 3) return "Enter old password";
        if (newPass.length < 6)
            return "New password must be at least 6 characters";
        return null;
    };

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();

        const oldPassword = e.target.oldPassword.value;
        const newPassword = e.target.newPassword.value;

        const error = validatePassword(oldPassword, newPassword);
        if (error) {
            Swal.fire("Validation Error", error, "warning");
            return;
        }

        try {
            const response = await axios.put(
                "http://localhost:8000/api/user/update-password",
                { oldPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            Swal.fire("Success", response.data.message, "success");
            e.target.reset();
        } catch (error) {
            Swal.fire(
                "Error",
                error.response?.data?.message || "Failed to update password",
                "error"
            );
        }
    };

    return (
        <div className="settings-container">

            {/* PROFILE UPDATE */}
            <div className="settings-card">
                <h2 className="settings-title">Update Profile</h2>

                <form onSubmit={handleProfileUpdate} className="settings-form">

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            value={profileData.user_name}
                            onChange={(e) =>
                                setProfileData({ ...profileData, user_name: e.target.value })
                            }
                            type="text"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            value={profileData.user_email}
                            onChange={(e) =>
                                setProfileData({ ...profileData, user_email: e.target.value })
                            }
                            type="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            value={profileData.user_phone}
                            onChange={(e) =>
                                setProfileData({ ...profileData, user_phone: e.target.value })
                            }
                            type="number"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group small">
                            <label>Age</label>
                            <input
                                value={profileData.user_age}
                                onChange={(e) =>
                                    setProfileData({ ...profileData, user_age: e.target.value })
                                }
                                type="number"
                                required
                            />
                        </div>

                        <div className="form-group small">
                            <label>Height (cm)</label>
                            <input
                                value={profileData.user_height}
                                onChange={(e) =>
                                    setProfileData({
                                        ...profileData,
                                        user_height: e.target.value,
                                    })
                                }
                                type="number"
                                required
                            />
                        </div>

                        <div className="form-group small">
                            <label>Weight (kg)</label>
                            <input
                                value={profileData.user_weight}
                                onChange={(e) =>
                                    setProfileData({
                                        ...profileData,
                                        user_weight: e.target.value,
                                    })
                                }
                                type="number"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Profile Image</label>
                        <input
                            type="file"
                            onChange={(e) => setProfileImage(e.target.files[0])}
                        />
                    </div>

                    <button className="save-btn" type="submit">
                        Save Changes
                    </button>
                </form>
            </div>


            {/* PASSWORD UPDATE */}
            <div className="settings-card">
                <h2 className="settings-title">Update Password</h2>

                <form onSubmit={handlePasswordUpdate} className="settings-form">
                    <div className="form-group">
                        <label>Old Password</label>
                        <input name="oldPassword" type="password" required />
                    </div>

                    <div className="form-group">
                        <label>New Password</label>
                        <input name="newPassword" type="password" required />
                    </div>

                    <button className="save-btn" type="submit">
                        Update Password
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Setting;
