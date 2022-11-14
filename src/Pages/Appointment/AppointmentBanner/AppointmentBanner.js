import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import bg from '../../../assets/images/bg.png';
import './AppointmentBanner.css'

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <header className="py-16" style={{background:`url(${bg})`, backgroundPosition:'center',backgroundSize:'cover'}}>
      <div className="hero">
        <div className="hero-content flex-col md:flex-row-reverse gap-10 lg:gap-24">
          <img
            src={chair}
            alt="dentist chair"
            className="md:max-w-xs lg:max-w-md rounded-lg shadow-2xl"
          />
          <div className="border shadow-lg rounded-xl">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>you selected {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
