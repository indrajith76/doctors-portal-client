import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  const { treatment, price, appointmentDate, slot } = booking;
  return (
    <div>
      <h2 className="text-3xl">Payment for {treatment}</h2>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}
      </p>
    </div>
  );
};

export default Payment;
