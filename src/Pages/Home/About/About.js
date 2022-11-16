import React, { useContext } from "react";
import treatment from "../../../assets/images/treatment.png";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
AOS.init({ duration: 2000 });

const About = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className="hero my-36">
      <div className="hero-content flex-col md:flex-row gap-16">
        <img
          data-aos="fade-right"
          src={treatment}
          className="md:w-1/2 lg:w-1/4 rounded-lg shadow-2xl"
          alt=""
        />
        <div data-aos="fade-left" className="md:w-2/5">
          <h1
            className={`text-3xl lg:text-5xl font-bold ${
              isDark ? "text-base-100" : "text-accent"
            }`}
          >
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className={`py-6 ${isDark ? "text-base-100" : "text-accent"}`}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default About;
