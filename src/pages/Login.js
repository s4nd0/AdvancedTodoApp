import React from "react";
import { useNavigate } from "react-router-dom";

// components
import FormLogin from "../components/FormLogin";
import ClickableWindow from "../components/ClickableWindow";
import MainText from "../components/MainText";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainText text={`Log in`} />
      <div className="sm:grid sm:grid-cols-2">
        <FormLogin />
        <ClickableWindow
          title={`If you don't have an account`}
          onClick={() => navigate("/signup")}
          text={`Registering in a task management application offers numerous benefits:`}
          list={[
            {
              id: 1,
              value:
                "Firstly, it allows users to personalize their experience by customizing preferences",
            },
            {
              id: 2,
              value:
                "Registration enables the synchronization of tasks across multiple devices, ensuring accessibility and continuity in managing tasks on-the-go.",
            },
            {
              id: 3,
              value:
                "User unlocks a plethora of functionalities designed to simplify, organize, and optimize his task management experience.",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Login;
