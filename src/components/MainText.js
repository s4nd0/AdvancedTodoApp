import React from "react";

const MainText = ({ text }) => {
  return (
    <p className="p-4 m-4 mb-0 rounded-md bg-gray-200 dark:bg-gray-700 shadow-lg text-center text-2xl">
      {text}
    </p>
  );
};

export default MainText;