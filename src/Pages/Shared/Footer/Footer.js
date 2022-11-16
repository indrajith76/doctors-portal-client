import React, { useContext } from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Footer = () => {
  const { isDark } = useContext(AuthContext);
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
          <span
            className={`footer-title ${
              isDark ? "text-base-100" : "text-slate-900"
            }`}
          >
            SERVICES
          </span>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            Emergency Checkup
          </Link>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            Monthly Checkup
          </Link>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            Weekly Checkup
          </Link>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            Deep Checkup
          </Link>
        </div>
        <div>
          <span
            className={`footer-title ${
              isDark ? "text-base-100" : "text-slate-900"
            }`}
          >
            ORAL HEALTH
          </span>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            Fluoride Treatment
          </Link>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            Cavity Filling
          </Link>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            Teath Whitening
          </Link>
        </div>
        <div>
          <span
            className={`footer-title ${
              isDark ? "text-base-100" : "text-slate-900"
            }`}
          >
            OUR ADDRESS
          </span>
          <Link
            to="/"
            className={`link link-hover ${
              isDark ? "text-gray-500" : "text-accent"
            }`}
          >
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div>
        <p
          className={`text-center mt-16 text-sm ${
            isDark ? "text-gray-500" : "text-accent"
          }`}
        >
          Copyright © 2022 - All right reserved by Indrajith Goswami.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
