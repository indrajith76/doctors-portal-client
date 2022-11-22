import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { isDark, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <p className="text-red-500">Something went wrong!!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h2 className="text-3xl">
        Please{" "}
        <button
          className={`${isDark ? "text-base-100" : "text-accent"}`}
          onClick={handleLogOut}
        >
          Sign Out
        </button>{" "}
        and log back in
      </h2>
    </div>
  );
};

export default DisplayError;
