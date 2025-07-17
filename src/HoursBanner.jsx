import React from "react";

export const HoursBanner = ({ label, displayHours }) => {
  return (
    <div className={"alert alert-success"}>
      <label>
        {label} {displayHours} hrs
      </label>
    </div>
  );
};
