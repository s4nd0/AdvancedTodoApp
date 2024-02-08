import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="border-2 ease-out duration-100 border-gray-300 hover:border-gray-200 dark:border-gray-600 dark:hover:border-gray-700 rounded-lg text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 w-fit mx-auto py-3 px-5 drop-shadow"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
