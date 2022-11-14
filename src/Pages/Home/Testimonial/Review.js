import React from "react";

const Review = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <div className="border p-8 rounded-lg shadow-lg">
      <p className="text-base">{userReview}</p>
      <div className="flex items-center gap-3 mt-8">
        <img
          className="w-16 border-2 border-secondary rounded-full p-1"
          src={img}
          alt=""
        />
        <div>
          <h6 className="text-xl font-semibold text-accent">{name}</h6>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
