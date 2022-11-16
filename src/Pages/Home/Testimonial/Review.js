import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Review = ({ review }) => {
  const { isDark } = useContext(AuthContext);
  const { name, img, review: userReview, location } = review;
  return (
    <div
      className={`border p-8 rounded-lg shadow-lg ${
        isDark && "border-primary"
      }`}
    >
      <p className={`${isDark ? "text-base-100" : "text-accent"}`}>
        {userReview}
      </p>
      <div className="flex items-center gap-3 mt-8">
        <img
          className="w-16 border-2 border-secondary rounded-full p-1"
          src={img}
          alt=""
        />
        <div>
          <h6
            className={`text-xl font-semibold ${
              isDark ? "text-base-100" : "text-accent"
            }`}
          >
            {name}
          </h6>
          <p className={`${isDark ? "text-base-100" : "text-accent"}`}>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
