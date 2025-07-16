import React from "react";

export const HoursBanner = ({ label, displayHours }) => {
  return (
    <div class="alert alert-success">
      <label>
        {label} {displayHours} hrs
      </label>
    </div>
  );
};
