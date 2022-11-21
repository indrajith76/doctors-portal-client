import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { BsSun, BsMoon } from "react-icons/bs";

const Navber = () => {
  const { user, logOut, isDark, themeHandler } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  document.body.classList = `${isDark ? "bg-slate-900" : "bg-base-100"}`;

  const menuItems = (
    <React.Fragment>
      <li>
        <Link className={`${isDark ? "text-base-100" : "text-accent"}`} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${isDark ? "text-base-100" : "text-accent"}`}
          to="/appointment"
        >
          Appointment
        </Link>
      </li>
      <li>
        <Link
          className={`${isDark ? "text-base-100" : "text-accent"}`}
          to="/about"
        >
          About
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link
              className={`${isDark ? "text-base-100" : "text-accent"}`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button
              className={`${isDark ? "text-base-100" : "text-accent"}`}
              onClick={handleLogOut}
            >
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link
            className={`${isDark ? "text-base-100" : "text-accent"}`}
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </React.Fragment>
  );
        
  return (
    <div
      className={`navbar justify-between ${
        isDark ? "bg-slate-900" : "bg-base-100"
      } sticky top-0 z-10`}
    >
      <div className="navbar-start w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${
              isDark ? "bg-slate-800" : "bg-base-100"
            } rounded-box w-52`}
          >
            {menuItems}
          </ul>
        </div>
        <div>
          <Link
            to="/"
            className={`btn btn-ghost normal-case text-xl ${
              isDark ? "text-base-100" : "text-accent"
            }`}
          >
            Doctors Portal
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <button
        className={`rounded-full hover:rotate-180 duration-1000 p-2 text-lg border-0 ${
          isDark
            ? "text-base-100 hover:bg-slate-800"
            : "text-accent hover:bg-slate-200"
        }`}
        onClick={themeHandler}
      >
        {isDark ? <BsSun /> : <BsMoon />}
      </button>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default Navber;
