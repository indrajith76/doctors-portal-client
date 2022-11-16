import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from 'react-hot-toast';

const ForgetPasswordModal = ({ setIsOnResetModal }) => {
  const { resetPassword } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleResetPassword = (data) => {
    resetPassword(data.email)
      .then(() => {
        setIsOnResetModal(false);
        toast.success('Reset your password successfully. Please check your email.')
      })
      .catch((err) => {
        toast.error("Failed password reset.")
        console.error(err)});
  };

  return (
    <>
      <input
        type="checkbox"
        id="reset-password-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reset-password-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Reset your password.!</h3>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <input
              {...register("email", {
                required: "enter your email in the email field.",
              })}
              type="email"
              className="input input-bordered w-full my-4"
              placeholder="Enter your email here"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
            <input
              type="submit"
              value="Reset Password"
              className="btn btg-primary mt-4 block mx-auto"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordModal;
