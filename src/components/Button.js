import React from "react";

const Button = ({ text, onClick, loading }) => {
  return (
    <>
      {!loading && (
        <button
          className="border-2 ease-out duration-100 border-gray-300 hover:border-gray-200 dark:border-gray-600 dark:hover:border-gray-700 rounded-lg text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 w-fit mx-auto py-3 px-5 drop-shadow"
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {loading && (
        <button
          className="border-2 flex flex-row items-center ease-out duration-100 border-gray-300 hover:border-gray-200 dark:border-gray-600 dark:hover:border-gray-700 rounded-lg text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 w-fit mx-auto py-3 px-5 drop-shadow"
          onClick={onClick}
        >
          <svg
            className={`animate-spin h-7 w-7 ${text && `mr-3`} ...`}
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
