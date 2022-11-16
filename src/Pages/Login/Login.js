import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import ForgetPasswordModal from "./ForgetPasswordModal";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleSignIn, isDark } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [isOnResetModal, setIsOnResetModal] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Login Successfully.");
      })
      .catch((err) => setLoginError(err.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login Successfully.");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="w-96 p-7 border rounded-lg shadow-lg">
          <h2
            className={`text-xl text-center ${
              isDark ? "text-base-100" : "text-accent"
            }`}
          >
            Login
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
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
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.email && (
                <small className="text-red-500">{errors.email?.message}</small>
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
                  min: 6,
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
                className="input input-bordered w-full"
              />
              {errors.password && (
                <small className="text-red-500">
                  {errors.password?.message}
                </small>
              )}
              <label className="label">
                <label
                  htmlFor="reset-password-modal"
                  className={`label-text ${
                    isDark ? "text-base-100" : "text-accent"
                  }`}
                >
                  Forget Password?
                </label>
              </label>
            </div>
            <input
              className="btn btn-accent w-full"
              value="Login"
              type="submit"
            />
            <div>{loginError && <p>{loginError}</p>}</div>
          </form>
          <p className={`my-2 ${isDark ? "text-base-100" : "text-accent"}`}>
            New to Doctors Portal?{" "}
            <Link className="text-secondary font-semibold" to="/signup">
              Create new account
            </Link>
          </p>
          <div
            className={`divider ${isDark ? "text-base-100" : "text-accent"}`}
          >
            OR
          </div>
          <button
            onClick={handleGoogleSignIn}
            className={`btn btn-outline w-full ${
              isDark ? "text-base-100" : "text-accent"
            }`}
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
      {isOnResetModal && (
        <ForgetPasswordModal
          setIsOnResetModal={setIsOnResetModal}
        ></ForgetPasswordModal>
      )}
    </>
  );
};

export default Login;
