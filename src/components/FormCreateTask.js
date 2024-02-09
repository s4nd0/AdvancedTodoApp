import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import ToggleIcon from "../icons/ToggleIcon.svg";
import ImgButton from "./ImgButton";
import Button from "./Button";
import ErrorText from "./ErrorText";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

// firebase imports
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const FormCreateTask = ({
  setName,
  name,
  setRange,
  range,
  setDetails,
  details,
  setDate,
  date,
  setExactDay,
  exactDay,
}) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    if (name && date) {
      // submit logic
      setIsPending(true);
      const time = new Date(date);
      time.setHours(time.getHours() + 24);
      const deadline = Timestamp.fromDate(time);
      try {
        await addDoc(collection(db, "tasks"), {
          uid: user.uid,
          name,
          date: deadline,
          exactDay,
          range,
          details,
        });
        setIsPending(false);
        navigate("/tasks");
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    } else {
      setError("Error: Invalid data in the form");
      setIsPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 m-4 rounded-md bg-gray-200 dark:bg-gray-700 shadow-lg sm:order-1"
    >
      <h2 className="text-2xl mb-4">Create Task</h2>
      <label className="grid grid-cols-2 mb-4 items-center">
        <span>Task name:</span>
        <input
          className="p-2 rounded-xl dark:bg-gray-800"
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-2 mb-4 items-center">
        <span>Date</span>
        <input
          className="p-2 rounded-xl dark:bg-gray-800"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label className="grid grid-cols-2 mb-4 items-center">
        <span>Completed that day:</span>
        <div className="flex flex-row items-center gap-2 mx-auto">
          <p
            className={`${
              exactDay ? "text-green-400" : "text-gray-500"
            } font-bold`}
          >
            Yes
          </p>
          <ImgButton
            src={ToggleIcon}
            alt="toggle-icon-button"
            onClick={() => setExactDay((prevExactDay) => !prevExactDay)}
            turned={exactDay}
          />
          <p
            className={`${
              !exactDay ? "text-green-400" : "text-gray-600"
            } font-bold`}
          >
            No
          </p>
        </div>
      </label>
      <label className="grid grid-cols-2 mb-6">
        <span>Importance (1-5):</span>
        <input
          className="cursor-pointer"
          type="range"
          min={1}
          max={5}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
      </label>
      <label className="grid grid-cols-2 mb-4">
        <span>Task details:</span>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="details"
          className="p-2 resize-none rounded-xl dark:bg-gray-800"
          name="details"
          id="task-details"
          rows="4"
        ></textarea>
      </label>
      {error && <ErrorText text={error} />}
      <Button
        text={!isPending ? `Create task!` : `Creating...`}
        loading={isPending}
      />
    </form>
  );
};

export default FormCreateTask;
