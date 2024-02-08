import React from "react";

const HiddenMenu = ({ isOpen, options, handleClick }) => {
  return (
    <>
      {isOpen && (
        <ul className="absolute overflow-hidden rounded-lg py-2 drop-shadow-md w-full mt-6 left-0 text-left text-black dark:text-white bg-gray-100 dark:bg-slate-700">
          {options &&
            options.map((item) => (
              <li
                className="flex flex-row justify-between dark:hover:bg-slate-600 hover:bg-gray-200 cursor-pointer py-2 px-1"
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {item.value && <span>{item.value}</span>}
                {item.image && (
                  <img
                    className="dark:invert"
                    src={item.image}
                    alt={item.value}
                  />
                )}
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default HiddenMenu;
