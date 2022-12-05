import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
  const { isDark } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-ashen-five.vercel.app/appointmentSpecialty"
      );
      const data = res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          //   save doctor information to the database
          fetch("https://doctors-portal-server-ashen-five.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-3xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
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
              Specialty
            </span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span
              className={`label-text ${
                isDark ? "text-base-100" : "text-accent"
              }`}
            >
              Photo
            </span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is required." })}
            className="input input-bordered w-full"
          />
          {errors.img && (
            <small className="text-red-500">{errors.img.message}</small>
          )}
        </div>
        <input
          className="btn btn-accent w-full mt-5"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctors;
