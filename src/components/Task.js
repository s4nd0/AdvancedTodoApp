import React, { useEffect, useState } from "react";

// components
import ImgButton from "./ImgButton";
import Button from "./Button";

// icons
import CompleteIcon from "../icons/CompleteIcon.svg";
import DeleteIcon from "../icons/DeleteIcon.svg";

// firebase imports
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Task = ({ name, range, details, date, exactDay, preview, id }) => {
  const [importance, setImportance] = useState("");

  const styles1 =
    "bg-green-600 text-center text-xl text-white py-2 px-4  rounded-lg";
  const styles2 =
    "bg-lime-600 text-center text-xl text-white py-2 px-4 rounded-lg";
  const styles3 =
    "bg-yellow-600 text-center text-xl text-white py-2 px-4 rounded-lg";
  const styles4 =
    "bg-orange-600 text-center text-xl text-white py-2 px-4 rounded-lg";
  const styles5 =
    "bg-red-600 text-center text-xl text-white py-2 px-4 rounded-lg";

  const handleDate = (seconds) => {
    const time = new Date(seconds * 1000);
    time.setHours(time.getHours() - 24);
    return time.toLocaleDateString();
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "tasks", id));
    } catch (err) {}
  };

  const handleComplete = async () => {
    try {
      await updateDoc(doc(db, "tasks", id), {
        completed: true,
      });
    } catch (err) {}
  };

  useEffect(() => {
    if (Number(range) === 1) {
      setImportance("Insignificant");
    }
    if (Number(range) === 2) {
      setImportance("Low");
    }
    if (Number(range) === 3) {
      setImportance("Considerable");
    }
    if (Number(range) === 4) {
      setImportance("Important");
    }
    if (Number(range) === 5) {
      setImportance("Critical");
    }
  }, [range]);

  return (
    <div
      className={`p-4 m-4 rounded-md bg-gray-200 dark:bg-gray-700 h-fit overflow-hidden shadow-lg`}
    >
      {importance && (
        <p
          className={
            importance === "Insignificant"
              ? styles1
              : importance === "Low"
              ? styles2
              : importance === "Considerable"
              ? styles3
              : importance === "Important"
              ? styles4
              : styles5
          }
        >
          {importance}
        </p>
      )}
      <h2 className="text-2xl mt-2">{name && name}</h2>
      <p className="mt-2">
        {date &&
          (exactDay
            ? `To be completed  ${preview ? date : handleDate(date.seconds)}`
            : `To be completed by ${
                preview ? date : handleDate(date.seconds)
              }`)}
      </p>
      {details && (
        <p className="mt-2 p-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow">
          {details}
        </p>
      )}
      {!preview && (
        <div className="grid grid-cols-2 justify-items-center mt-6">
          <ImgButton
            src={CompleteIcon}
            alt={`complete-icon`}
            onClick={handleComplete}
          />
          <ImgButton
            src={DeleteIcon}
            alt={`delete-icon`}
            onClick={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default Task;
