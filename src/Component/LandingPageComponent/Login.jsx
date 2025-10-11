import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Login = () => {
    const schema = yup.object({
        user_email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
        user_password: yup.string().required("Password is required")
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
            if (result.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                    text: result.data.message,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: result.data.message,
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

            <div className="div-about">
                <Navbar />
                <div className="container-fluid mt-1">
                    <h1 className="about-heading">Already Member</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <img src="login img.png" className="login-img" alt="login" />
                </div>
                <div className="col-sm-6">

                    <h2 className="login-text home2-para">
                        <strong>ENTER DETAILS TO LOGIN</strong>
                        <br />
                    </h2>

                    <div className="row">

                        <div className="col-sm-10">

                            <form onSubmit={handleSubmit(handleLogic)}>

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
                                    type="submit"
                                    className="m-2 btn btn-warning"
                                />
                            </form>
                            <div className="col-sm-2">
                                <p className="text-warning">not a member</p>
                                <Link className="nav-link" to="/membership">
                                    <strong className="text-warning">Register</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4"></div>





        </>
    );
};

export default Login
