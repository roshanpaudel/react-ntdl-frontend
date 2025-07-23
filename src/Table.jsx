import React from "react";

export const Table = ({
  deleteData,
  habitData,
  toggleBadHabit,
  index,
  tableCount,
  handleOnSelect,
  toDelete,
}) => {
  return (
    <>
      <tbody id={habitData.isBadHabit ? "entryList" : "badList"}>
        <tr>
          <td>{tableCount}</td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              value={index}
              onChange={handleOnSelect}
              checked={toDelete.includes(index)}
            ></input>{" "}
            {habitData.habitName}
          </td>
          <td>{habitData.hours}hr</td>
          <td class="text-end">
            {habitData.isBadHabit ? (
              <>
                <button
                  onClick={() => toggleBadHabit(index, false)}
                  class="btn btn-warning"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  onClick={() => deleteData(index)}
                  class="btn btn-danger"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => deleteData(index)}
                  class="btn btn-danger"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => toggleBadHabit(index, true)}
                  class="btn btn-success"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};
