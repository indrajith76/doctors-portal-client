import React from "react";
import treatment from "../../../assets/images/treatment.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 2000 });

const About = () => {
  return (
    <div className="hero my-36">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <img
          data-aos="fade-right"
          src={treatment}
          className="w-1/4 rounded-lg shadow-2xl"
          alt=""
        />
        <div data-aos="fade-left" className="w-2/5">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary font-bold text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
