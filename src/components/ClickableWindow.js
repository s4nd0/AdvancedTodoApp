import React from "react";

const ClickableWindow = ({ title, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-4 m-4 rounded-md shadow-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 duration-100 ease-in-out"
    >
      {title && <p className="text-2xl">{title}</p>}
      {text && <p className="">{text}</p>}
    </div>
  );
};

export default ClickableWindow;
