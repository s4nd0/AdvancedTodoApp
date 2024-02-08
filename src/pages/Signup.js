import React from "react";

// components
import FormSignup from "../components/FormSignup";
import ClickableWindow from "../components/ClickableWindow";
import { useNavigate } from "react-router-dom";
import MainText from "../components/MainText";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainText text={`Sign Up`} />
      <div className="sm:grid sm:grid-cols-2">
        <FormSignup />
        <ClickableWindow
          title={`If you have an account`}
          onClick={() => navigate("/login")}
          text={`Go to the login page if you already have an account on our website`}
        />
      </div>
    </>
  );
};

export default Signup;
