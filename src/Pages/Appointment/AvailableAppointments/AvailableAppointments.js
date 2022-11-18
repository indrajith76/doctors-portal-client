import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const {data:appointmentOptions = []} = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentOptions");
      const data = await res.json();
      return data;
    },
  });

  /* const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: () =>
      fetch("http://localhost:5000/appointmentOptions").then((res) =>
        res.json()
      ),
  }); */

  return (
    <section className="my-20">
      <p className="text-center text-primary font-semibold text-2xl">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option?._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
