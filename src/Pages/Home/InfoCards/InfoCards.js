import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
import AOS from 'aos';
import 'aos/dist/aos.css';  
AOS.init({ duration: 2000 });

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the price",
      icon: clock,
      bgClass:
        "bg-gradient-to-l from-primary to-secondary flex flex-col md:flex-row items-center gap-5 py-8 px-5 rounded-xl",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-accent flex flex-col md:flex-row items-center gap-5 py-8 px-5 rounded-xl",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass:
        "bg-gradient-to-l from-primary to-secondary flex flex-col md:flex-row items-center gap-5 py-8 px-5 rounded-xl",
    },
  ];

  return <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
    {
        cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
    }
  </div>;
};

export default InfoCards;
