import React from "react";

const InfoCard = ({card}) => {
    const {name,description,icon,bgClass}=card
  return (
    <div className={bgClass}>
      <img src={icon} alt="" />
      <div>
        <h6 className="text-xl text-white font-semibold">{name}</h6>
        <p className="text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
