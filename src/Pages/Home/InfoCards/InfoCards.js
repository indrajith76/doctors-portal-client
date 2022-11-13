import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="bg-gradient-to-l from-primary to-secondary flex items-center gap-5 py-8 px-5 rounded-xl">
        <img src={clock} alt="" />
        <div>
          <h6 className="text-xl text-white font-semibold">Opening Hours</h6>
          <p className="text-white">Lorem Ipsum is simply dummy text of the price</p>
        </div>
      </div>
      <div className="bg-accent flex items-center gap-5 py-8 px-5 rounded-xl">
        <img src={marker} alt="" />
        <div>
          <h6 className="text-xl text-white font-semibold">Opening Hours</h6>
          <p className="text-white">Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="bg-gradient-to-l from-primary to-secondary flex items-center gap-5 py-8 px-5 rounded-xl">
        <img src={phone} alt="" />
        <div>
          <h6 className="text-xl text-white font-semibold">Opening Hours</h6>
          <p className="text-white">+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
