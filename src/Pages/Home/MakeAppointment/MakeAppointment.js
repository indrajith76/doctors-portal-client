import React from "react";
import doctorSmall from '../../../assets/images/doctor-small.png'; 
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="lg:mt-72 lg:mb-20" style={{background:`url(${appointment})`}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img
            src={doctorSmall}
            className="w-1/2 -mt-32 hidden lg:block" alt=""
          />
          <div className="px-5 py-16 lg:pr-20">
            <h5 className="text-xl font-bold text-secondary mb-3">Appointment</h5>
            <h1 className="text-3xl lg:text-4xl text-white font-bold">Make an appointment Today</h1>
            <p className="py-4 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
