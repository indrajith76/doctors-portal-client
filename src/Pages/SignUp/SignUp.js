import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="w-96 p-7 border rounded-lg shadow-lg">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
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
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
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
                  message:'Password must be strong.'
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <small className="text-red-500">{errors.password?.message}</small>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="my-2">
          Already have an account?{" "}
          <Link className="text-secondary font-semibold" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
