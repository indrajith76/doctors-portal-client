import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Loading = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex w-full items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-white animate-spin">
          <div className={`h-9 w-9 rounded-full ${isDark?'bg-slate-900':'bg-white'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
