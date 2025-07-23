import { useEffect, useRef, useState } from "react";
import { UserInput } from "./UserInput";
import { Table } from "./Table";
import { HoursBanner } from "./HoursBanner";
import { postTask } from "./helpers/apiHelper";
import { fetchAll } from "./helpers/apiHelper";
import { updateData } from "./helpers/apiHelper";
import { deleteTasksByIds } from "./helpers/apiHelper";

function App() {
  const [habitData, setHabitData] = useState([]);
  const [response, setResponseBanner] = useState({});
  const habitRef = useRef();
  const hourRef = useRef();
  const shouldFetchRef = useRef(true); // used to overcome the double useEffect execution
  const [toDelete, setToDelete] = useState([]);
  let tableCountGood = 1;
  let tableCountBad = 1;
  useEffect(() => {
    shouldFetchRef.current && getData();
    shouldFetchRef.current = false;
  }, []);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const inputObj = {
      habitName: habitRef.current.value,
      hours: hourRef.current.value,
      isBadHabit: false,
    };
    if (Number(inputObj.hours) + totalHours > 24 * 7) {
      return alert("Sorry hours exceed the maximum limit for a week");
    } else {
      setHabitData((prevData) => [...prevData, inputObj]);
      //call api to send data to database
      const response = await postTask(inputObj);
      setResponseBanner(response);
      getData();
    }
  };
  const getData = async () => {
    //call axios helper to get data from server
    const data = await fetchAll();
    console.log(data.task);
    //mount that data to habitData state
    data?.status === "success" && setHabitData(data.task);
  };

  const handleOnDelete = async (idsToDelete) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      //setHabitData((prev) => prev.filter((_, index) => index !== objIndex));
      const response = await deleteTasksByIds(idsToDelete);
      if (response.status === "success") {
        //refetch all the task
        getData();
        setToDelete([]);
      }
    }
  };
  const toggleBadHabit = async (_id, isBad) => {
    const response = await updateData({ _id, isBadHabit: isBad });

    setResponseBanner(response);
    if (response.status === "success") {
      //refetch all the task
      getData();
    }
  };

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(e);
    console.log(checked, value);
    let tempIds = [];
    if (value === "allEntry") {
      tempIds = habitData
        .filter((item) => item.isBadHabit === false)
        .map((item) => item._id);
    }
    if (value === "allBad") {
      tempIds = habitData
        .filter((item) => item.isBadHabit === true)
        .map((item) => item._id);
    }
    if (checked) {
      if (value === "allEntry" || value === "allBad") {
        const uniqueIDs = [...new Set([...toDelete, ...tempIds])];
        setToDelete(uniqueIDs);
        return;
      }

      setToDelete([...toDelete, value]);
    } else {
      if (value === "allEntry" || value === "allBad") {
        setToDelete(toDelete.filter((_id) => !tempIds.includes(_id)));
        return;
      }
      setToDelete(toDelete.filter((_id) => _id !== value));
    }
    console.log(checked, value);
  };
  console.log(toDelete);

  // 👇 We use the reduce() method to go through each habit one by one
  // It helps us "reduce" the array into a single result (like a total count)
  // We're building an object that stores 2 things:
  // - totalHours (all hours combined)
  // - badHabitHours (only hours from bad habits)
  const { totalHours, badHabitHours } = habitData.reduce(
    // totals is the object that keeps track of both totals
    // habit is the current item we're looking at in the array
    (totals, habit) => {
      // ➕ Step 1: Add the current habit's hours to totalHours
      totals.totalHours += Number(habit.hours);
      // ❗ Step 2: Check if it's a bad habit
      if (habit.isBadHabit) {
        // ➕ If yes, also add its hours to badHabitHours
        totals.badHabitHours += Number(habit.hours);
      }
      // 🔁 Always return the updated totals object so it moves to the next habit
      return totals;
    }, // 🏁 Initial value of totals (starts at 0 hours for both)
    {
      totalHours: 0,
      badHabitHours: 0,
    }
  );

  return (
    <>
      <div className="wrapper pt-5">
        <div className="container">
          <h1 className="text-center">Not To Do List</h1>
          {response?.message && response?.status && (
            <div
              className={
                response.status === "success"
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
            >
              {response.message}
            </div>
          )}

          <UserInput
            habitRef={habitRef}
            hourRef={hourRef}
            handleOnSubmit={handleOnSubmit}
          />
          <div>
            <div className="row mt-5">
              <div className="col-md">
                <h3 className="text-center">Entry List</h3>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="allEntry"
                  id="all-entry"
                  onChange={handleOnSelect}
                ></input>{" "}
                <label htmlFor="all-entry">Select All</label>
                <hr />
                <table className="table table-striped table-hover border">
                  {habitData.map(
                    (habitData) =>
                      habitData.isBadHabit === false && (
                        <Table
                          toggleBadHabit={toggleBadHabit}
                          habitData={habitData}
                          index={habitData._id}
                          tableCount={tableCountGood++}
                          handleOnSelect={handleOnSelect}
                          toDelete={toDelete}
                        />
                      )
                  )}
                </table>
              </div>
              <div className="col-md">
                <h3 className="text-center">Bad List</h3>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="allBad"
                  id="all-bad"
                  onChange={handleOnSelect}
                ></input>{" "}
                <label htmlFor="all-bad">Select All</label>
                <hr />
                <table className="table table-striped table-hover border">
                  {habitData.map(
                    (habitData) =>
                      habitData.isBadHabit === true && (
                        <Table
                          toggleBadHabit={toggleBadHabit}
                          habitData={habitData}
                          index={habitData._id}
                          tableCount={tableCountBad++}
                          handleOnSelect={handleOnSelect}
                          toDelete={toDelete}
                        />
                      )
                  )}
                </table>
                <HoursBanner
                  label="You could have saved "
                  displayHours={badHabitHours}
                />
              </div>
              {toDelete.length > 0 && (
                <div className="row my-5 d-grid">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleOnDelete(toDelete)}
                  >
                    Delete {toDelete.length} task(s)
                  </button>
                </div>
              )}

              <HoursBanner
                label="Total hours allocated is "
                displayHours={totalHours}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
