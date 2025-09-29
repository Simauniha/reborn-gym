import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
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

  const handleLogic = (data) => {
    console.log("✅ Form Data:", data);
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
        <div className="col-sm-6">
          <img src="login img.png" className="login-img" alt="login" />
        </div>
        <div className="col-sm-6">
          <h2 className="login-text home2-para">
            <strong>FEEL FREE TO CONTACT</strong>
            <br />
            <span className="span-para">
              <strong>WITH US!</strong>
            </span>
          </h2>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 ">
              
              <form onSubmit={handleSubmit(handleLogic)}>
                <input
                  type="text"
                  {...register("user_name")}
                  placeholder="Enter Your Name"
                  className="form-control mb-2 mt-2"
                />
                {errors.user_name && (
                  <p className="text-danger">{errors.user_name.message}</p>
                )}

                <input
                  type="email"
                  {...register("user_email")}
                  placeholder="Enter Your Email"
                  className="form-control mb-2"
                />
                {errors.user_email && (
                  <p className="text-danger">{errors.user_email.message}</p>
                )}

                <input
                  type="password"
                  {...register("user_password")}
                  placeholder="Enter Your Password"
                  className="form-control mb-2"
                />
                {errors.user_password && (
                  <p className="text-danger">{errors.user_password.message}</p>
                )}

                <input
                  type="text"
                  {...register("user_phone")}
                  placeholder="Enter Your Phone"
                  className="form-control mb-2"
                />
                {errors.user_phone && (
                  <p className="text-danger">{errors.user_phone.message}</p>
                )}

                <input
                  type="number"
                  {...register("user_age")}
                  placeholder="Enter Your Age"
                  className="form-control mb-2"
                />
                {errors.user_age && (
                  <p className="text-danger">{errors.user_age.message}</p>
                )}

                <input
                  type="text"
                  {...register("user_height")}
                  placeholder="Enter Your Height"
                  className="form-control mb-2"
                />
                {errors.user_height && (
                  <p className="text-danger">{errors.user_height.message}</p>
                )}

                <input
                  type="text"
                  {...register("user_weight")}
                  placeholder="Enter Your Weight"
                  className="form-control mb-2"
                />
                {errors.user_weight && (
                  <p className="text-danger">{errors.user_weight.message}</p>
                )}

                <input
                  type="submit"
                  className="form-control mb-2 btn btn-warning"
                />
              </form>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
