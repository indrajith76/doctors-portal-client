import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex w-full items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-white animate-spin">
          <div className="h-9 w-9 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
