import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 2000 });

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="mt-32">
      <h6 className="text-xl text-primary text-center font-bold mb-2">
        OUR SERVICES
      </h6>
      <h4 className="text-3xl text-center text-accent">Services We Provide</h4>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
      >
        {servicesData.map((serviceData) => (
          <Service key={serviceData.id} serviceData={serviceData}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
