import React from "react";

const Service = ({ serviceData }) => {
  const { title, description, img } = serviceData;
  return (
    <div className="p-10 rounded-lg shadow-md border">
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <h6 className="text-center text-xl font-semibold text-accent mt-8 mb-3">{title}</h6>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Service;
