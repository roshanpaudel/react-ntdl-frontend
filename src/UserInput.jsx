import React from "react";

export const UserInput = ({ habitRef, hourRef, handleOnSubmit }) => {
  return (
    <div>
      <form action="" className="border p-5 rounded shadow-lg mt-5">
        <div className="row g-2">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Habits"
              aria-label="First name"
              name="task"
              id="task"
              ref={habitRef}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="0"
              aria-label="Last name"
              name="hr"
              min="1"
              ref={hourRef}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button
              onClick={handleOnSubmit}
              className="btn btn-primary"
              type="submit"
            >
              Add New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
