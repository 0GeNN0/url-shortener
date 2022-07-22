import React from "react";

const StatisticItem = ({ icon, heading, par }) => {

  return (
    <div className="grid-item">
      <div className="grid-item-img">
        <img src={icon} alt="icon" />
      </div>
      <h3>{heading}</h3>
      <p>{par}</p>
    </div>
  );
};

export default StatisticItem;