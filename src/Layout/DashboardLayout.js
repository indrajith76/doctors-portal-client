import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navber from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user, isDark } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navber></Navber>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul
            className={`menu p-4 w-80 ${
              isDark
                ? "text-base-100 bg-slate-900"
                : "text-slate-900 bg-base-100"
            }`}
          >
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
                <Link to="/dashboard/adddoctors">Add A Doctor</Link>
                <Link to="/dashboard/managedoctors">Manage Doctors</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
