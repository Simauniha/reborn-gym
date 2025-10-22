import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    user_email: yup.string().email("Invalid email").required("Email is required"),
    user_password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogic = async (data, e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:8000/api/login", data);
      const { success, user, token, userType, message } = result.data;

      if (success && token) {
        localStorage.setItem("userInfo", JSON.stringify({ user, token, userType }));
        localStorage.setItem("token", token);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: message || "Welcome back!",
        });

        if (userType === "admin") {
          navigate("/adminDashboard");
        } else {
          navigate("/userDashboard");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: message || "Invalid credentials",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: err.response?.data?.message || "Something went wrong!",
      });
      console.error("Login Error:", err);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="div-about">
        <Navbar />
        <div className="container-fluid mt-1">
          <h1 className="about-heading">Already Member</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="row justify-content-center align-items-center">

          {/* Left Image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src="login img.png" className="login-img shadow-lg" alt="login" />
          </div>

          {/* Right Form */}
          <div className="col-lg-5">
            <div className="card p-4 shadow-sm border-0">
              <h3 className="mb-4 text-center text-dark fw-bold">Enter Details to Login</h3>

              <form onSubmit={handleSubmit(handleLogic)}>
                {/* Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    {...register("user_email")}
                    placeholder="Enter Your Email"
                    className={`form-control ${errors.user_email ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_email?.message}</div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <input
                    type="password"
                    {...register("user_password")}
                    placeholder="Enter Your Password"
                    className={`form-control ${errors.user_password ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_password?.message}</div>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn register-btn">
                    Login
                  </button>
                </div>
              </form>

              {/* Link to Register */}
              <div className="text-center mt-3">
                <p className="mb-0">Not a member?</p>
                <Link to="/register" className="fw-bold text-decoration-none login-btn">
                  Register Here
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Login;
