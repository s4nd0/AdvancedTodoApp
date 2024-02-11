import React from "react";
import { useNavigate } from "react-router-dom";

// components
import ClickableWindow from "../components/ClickableWindow";
import Task from "../components/Task";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

// firebase imports

import { Timestamp } from "firebase/firestore";
import LoadingComponent from "../components/LoadingComponent";
import MainText from "../components/MainText";
import ErrorText from "../components/ErrorText";
const Home = () => {
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const { documents, isPending, error } = useCollection(
    "tasks",
    ["uid", "==", user.uid],
    ["date"]
  );

  const handleIsToday = (seconds) => {
    const timeMarginUp = seconds;
    const timeMarginDown = seconds - 86400;
    const now = Timestamp.fromDate(new Date()).seconds;
    if (now > timeMarginDown && now < timeMarginUp) {
      return true;
    } else return false;
  };

  return (
    <>
      <MainText
        text={`Hello ${user.displayName}, here are your tasks for today. If you don't have one, create some!`}
      />
      <div className="sm:grid sm:grid-cols-2 mb-20">
        <div>
          {documents &&
            documents.map((item) => {
              if (handleIsToday(item.date.seconds)) {
                return <Task key={item.id} {...item} />;
              }
              return null;
            })}
          {isPending && <LoadingComponent />}
          {error && <ErrorText text={error} />}
        </div>
        <div>
          <ClickableWindow
            title={`View your tasks!`}
            text={`View all your completed tasks and those that still need to be done!`}
            onClick={() => navigate("/tasks")}
          />
          <ClickableWindow
            title={`Add a task!`}
            text={`Add your task to be performed and manage it the way you want!`}
            onClick={() => navigate("/create")}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
