import React from "react";
import { useNavigate } from "react-router-dom";

// components
import MainText from "../components/MainText";
import ClickableWindow from "../components/ClickableWindow";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import LoadingComponent from "../components/LoadingComponent";
import Task from "../components/Task";
import FilterComponent from "../components/FilterComponent";

const Tasks = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { documents, isPending, error } = useCollection(
    "tasks",
    ["uid", "==", user.uid],
    ["date"]
  );

  return (
    <>
      {!isPending && (
        <>
          <FilterComponent />
          <div className="sm:grid sm:grid-cols-2">
            <div>
              {documents &&
                documents.map((item) => <Task key={item.id} {...item} />)}
            </div>
            <ClickableWindow
              title={`Add more tasks!`}
              text={`If you don't have enough tasks, add new ones!`}
              onClick={() => navigate("/create")}
            />
          </div>
        </>
      )}
      {isPending && <LoadingComponent />}
      {error && <MainText text={error} />}
    </>
  );
};

export default Tasks;
