import React from "react";

export const Table = ({ deleteData, habitData, toggleBadHabit, index }) => {

  return (
    <tbody id={habitData.isBadHabit ? "entryList" : "badList"}>
      <tr>
        <td>{index + 1}</td>
        <td>{habitData.habitName}</td>
        <td>{habitData.hours}hr</td>
        <td class="text-end">
          {habitData.isBadHabit ? (
            <>
              <button
                onClick={() => toggleBadHabit(index)}
                class="btn btn-warning"
              >
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={() => deleteData(index)} class="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => deleteData(index)} class="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button
                onClick={() => toggleBadHabit(index)}
                class="btn btn-success"
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </>
          )}
        </td>
      </tr>
    </tbody>
  );
};
