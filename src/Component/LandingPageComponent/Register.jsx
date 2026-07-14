import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Register = () => {
  const schema = yup.object({
    user_name: yup.string().required("Name is required"),
    user_email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    user_password: yup.string().required("Password is required"),
    user_phone: yup.string().required("Phone is required"),
    user_age: yup
      .number()
      .typeError("Age must be a number")
      .required("Age is required"),
    user_height: yup.string().required("Height is required"),
    user_weight: yup.string().required("Weight is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogic = async (data) => {
    const result = await axios.post("http://localhost:8000/api/register", data);
    if (result.data.success) {
      Swal.fire({
        icon: "success",
        title: "Registered Successfully",
        text: result.data.message,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: result.data.message,
      });
    }
  };

  return (
    <>
      <div className="div-about">
        <Navbar />
        <div className="container-fluid mt-1">
          <h1 className="about-heading">New Member</h1>
        </div>
      </div>
      <div className="container-fluid py-4" style={{ backgroundColor: "#f8f9fa" }}>

        <div className="row justify-content-center align-items-center">
          {/* Left Side Image */}
          <div className="col-lg-5">
            <img src="login img.png" className="login-img shadow-lg" alt="login" />
          </div>

          {/* Right Side Form */}
          <div className="col-lg-5">
            <div className="card p-4 shadow-sm border-0">
              <h3 className="mb-4 text-center text-dark fw-bold">
                Enter Details to Register
              </h3>

              <form onSubmit={handleSubmit(handleLogic)}>

                {/* Input Fields */}
                <div className="mb-3">
                  <input
                    type="text"
                    {...register("user_name")}
                    placeholder="Full Name"
                    className={`form-control ${errors.user_name ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_name?.message}</div>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    {...register("user_email")}
                    placeholder="Email Address"
                    className={`form-control ${errors.user_email ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_email?.message}</div>
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    {...register("user_password")}
                    placeholder="Password"
                    className={`form-control ${errors.user_password ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_password?.message}</div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    {...register("user_phone")}
                    placeholder="Phone Number"
                    className={`form-control ${errors.user_phone ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_phone?.message}</div>
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    {...register("user_age")}
                    placeholder="Age"
                    className={`form-control ${errors.user_age ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_age?.message}</div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    {...register("user_height")}
                    placeholder="Height (e.g., 5'8 or 173cm)"
                    className={`form-control ${errors.user_height ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_height?.message}</div>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    {...register("user_weight")}
                    placeholder="Weight (e.g., 70kg)"
                    className={`form-control ${errors.user_weight ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.user_weight?.message}</div>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn register-btn">
                    Register
                  </button>
                </div>
              </form>

              <div className="text-center mt-3">
                <p className="mb-0">Already a member?</p>
                <Link to="/login" className="fw-bold text-decoration-none login-btn">
                  Login Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >

      <Footer />
    </>
  );
};

export default Register;
