import React from "react";
import { useNavigate } from "react-router-dom";

// components
import ClickableWindow from "../components/ClickableWindow";
import MainText from "../components/MainText";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  return (
    <>
      <MainText text={`Hello, ${user.displayName}!`} />
      <div className="sm:grid sm:grid-cols-2">
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
    </>
  );
};

export default Home;
