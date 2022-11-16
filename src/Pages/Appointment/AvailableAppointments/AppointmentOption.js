import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  const { isDark } = useContext(AuthContext);
  return (
    <div className={`card shadow-xl border ${isDark && "border-primary"}`}>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold text-secondary">{name}</h2>
        <p className={`${isDark?'text-base-100':'text-accent'}`}>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p className={`${isDark?'text-base-100':'text-accent'}`}>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
