import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <p
      onClick={handleClick}
      className="py-2 px-4 rounded-full ease-out duration-100 cursor-pointer hover:bg-gray-200 bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800  font-protest text-sm sm:text-lg lg:text-2xl mr-auto drop-shadow"
    >
      {text}
    </p>
  );
};

export default Logo;
