import React, { useState } from "react";
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
  const [activeFilter, setActiveFilter] = useState(false);
  const [range, setRange] = useState(5);
  const [activeRange, setActiveRange] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

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
          <FilterComponent
            setRange={setRange}
            range={range}
            setActiveRange={setActiveRange}
            activeRange={activeRange}
            setActive={setActiveFilter}
            active={activeFilter}
            setShowCompleted={setShowCompleted}
            showCompleted={showCompleted}
          />
          <div className="sm:grid sm:grid-cols-2">
            <div>
              {documents &&
                documents.map((item) => {
                  if (activeRange) {
                    if (showCompleted) {
                      if (range === item.range && item.completed) {
                        return <Task key={item.id} {...item} />;
                      } else {
                        return null;
                      }
                    } else {
                      if (range === item.range && !item.completed) {
                        return <Task key={item.id} {...item} />;
                      } else {
                        return null;
                      }
                    }
                  } else {
                    if (showCompleted) {
                      if (item.completed) {
                        return <Task key={item.id} {...item} />;
                      } else {
                        return null;
                      }
                    } else {
                      if (!item.completed) {
                        return <Task key={item.id} {...item} />;
                      } else {
                        return null;
                      }
                    }
                  }
                })}
            </div>
            <ClickableWindow
              title={`Add more tasks!`}
              text={`If you don't have enough tasks, add new ones!`}
              onClick={() => navigate("/create")}
            />
          </div>
        </>
      )}
      {isPending && <LoadingComponent padding={true} />}
      {error && <MainText text={error} />}
    </>
  );
};

export default Tasks;
