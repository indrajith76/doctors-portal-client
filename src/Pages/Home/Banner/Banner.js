import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';  
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
AOS.init({ duration: 2000 });

const Banner = () => {
  return (
    <div className="hero banner-bg py-5 lg:py-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img data-aos="fade-left" src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div  data-aos="fade-right">
          <h1 className="text-3xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
