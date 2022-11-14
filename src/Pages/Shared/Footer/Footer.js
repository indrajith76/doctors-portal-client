import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-10"
    >
      <div className="footer justify-around">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div>
        <p className="text-center mt-16 text-sm">
          Copyright © 2022 - All right reserved by Indrajith Goswami.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
