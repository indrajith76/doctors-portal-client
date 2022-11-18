import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser, isDark } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign Up successfully!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className="flex justify-center my-10">
      <div className="w-96 p-7 border rounded-lg shadow-lg">
        <h2
          className={`text-xl text-center ${
            isDark ? "text-base-100" : "text-accent"
          }`}
        >
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span
                className={`label-text ${
                  isDark ? "text-base-100" : "text-accent"
                }`}
              >
                Name
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required." })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span
                className={`label-text ${
                  isDark ? "text-base-100" : "text-accent"
                }`}
              >
                Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required." })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span
                className={`label-text ${
                  isDark ? "text-base-100" : "text-accent"
                }`}
              >
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password should be 6 character.",
                },
                pattern: {
                  value: /(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_])/,
                  message:
                    "Password must have uppercase number and special character.",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <small className="text-red-500">{errors.password?.message}</small>
            )}
          </div>
          {signUpError && <p className="text-red-500">{signUpError}</p>}
          <input
            className="btn btn-accent w-full mt-5"
            value="Login"
            type="submit"
          />
        </form>
        <p className={`my-2 ${isDark ? "text-base-100" : "text-accent"}`}>
          Already have an account?{" "}
          <Link className="text-secondary font-semibold" to="/login">
            Please Login
          </Link>
        </p>
        <div className={`divider ${isDark ? "text-base-100" : "text-accent"}`}>
          OR
        </div>
        <button
          className={`btn btn-outline w-full ${
            isDark ? "text-base-100" : "text-accent"
          }`}
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
