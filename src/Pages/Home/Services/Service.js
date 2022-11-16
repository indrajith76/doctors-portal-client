import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Service = ({ serviceData }) => {
  const { isDark } = useContext(AuthContext);
  const { title, description, img } = serviceData;
  return (
    <div className={`p-10 rounded-lg shadow-md border ${isDark && "border-primary"}`}>
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <h6
        className={`text-center text-xl font-semibold ${
          isDark ? "text-base-100" : "text-accent"
        } mt-8 mb-3`}
      >
        {title}
      </h6>
      <p className={`text-center ${isDark ? "text-base-100" : "text-accent"}`}>
        {description}
      </p>
    </div>
  );
};

export default Service;
