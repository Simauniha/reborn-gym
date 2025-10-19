import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
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
    // console.log("✅ Form Data:", data);
    const result = await axios.post("http://localhost:8000/api/register", data);
    //  console.log(result,":$^%$^%$%^&");
    if (result.data.success) {
      Swal.fire({
        icon: "success",
        title: "Registered Successfully ",
        text: result.data.message
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Registered Unsuccessfully ",
        text: result.data.message
      })
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
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <img src="login img.png" className="login-img" alt="login" />
        </div>
        <div className="col-sm-5">

          <h2 className="login-text home2-para">
            <strong>ENTER DETAILS TO REGISTER</strong>
            <br />
          </h2>

          <div className="row">

            <div className="col-sm-10">

              <form onSubmit={handleSubmit(handleLogic)}>
                <input
                  type="text"
                  {...register("user_name")}
                  placeholder="Enter Your Name"
                  className="form-control user-name"
                />
                {errors.user_name && (
                  <p className="text-danger ">{errors.user_name.message}</p>
                )}

                <input
                  type="email"
                  {...register("user_email")}
                  placeholder="Enter Your Email"
                  className="form-control user-name"
                />
                {errors.user_email && (
                  <p className="text-danger">{errors.user_email.message}</p>
                )}

                <input
                  type="password"
                  {...register("user_password")}
                  placeholder="Enter Your Password"
                  className="form-control user-name"
                />
                {errors.user_password && (
                  <p className="text-danger">{errors.user_password.message}</p>
                )}

                <input
                  type="text"
                  {...register("user_phone")}
                  placeholder="Enter Your Phone"
                  className=" form-control user-name"
                />
                {errors.user_phone && (
                  <p className="text-danger">{errors.user_phone.message}</p>
                )}

                <input
                  type="number"
                  {...register("user_age")}
                  placeholder="Enter Your Age"
                  className=" form-control user-name "
                />
                {errors.user_age && (
                  <p className="text-danger">{errors.user_age.message}</p>
                )}

                <input
                  type="text"
                  {...register("user_height")}
                  placeholder="Enter Your Height"
                  className=" user-name form-control d-flex"
                />
                {errors.user_height && (
                  <p className="text-danger">{errors.user_height.message}</p>
                )}

                <input
                  type="text"
                  {...register("user_weight")}
                  placeholder="Enter Your Weight"
                  className="user-name  form-control d-flex"
                />
                {errors.user_weight && (
                  <p className="text-danger">{errors.user_weight.message}</p>
                )}

                <input
                  type="submit"
                  className="mb-2 user-name   btn btn-warning"
                />
              </form>
              <div >
                <p>Already A Member</p>
                <Link className="nav-link" to="/login">
                  <strong>Login</strong>
                </Link>
              </div>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>

      <div className="col-sm-1"></div>


      <div>
        <Footer />
      </div>


    </>
  );
};

export default Register;
