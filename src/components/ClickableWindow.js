import React from "react";

const ClickableWindow = ({ title, text, onClick, list, footer }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-6 m-4 rounded-md border-2 border-gray-800 dark:border-white shadow bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 duration-100 ease-in-out h-fit"
    >
      {title && <p className="text-2xl text-center">{title}</p>}
      {text && <p className="my-2 text-lg">{text}</p>}
      {list && (
        <ul className=" list-disc m-2 ml-4">
          {list.map((item) => (
            <li className="my-2" key={item.id}>
              {item.value}
            </li>
          ))}
        </ul>
      )}
      {footer && <p className="text-xl mt-8 text-center">{footer}</p>}
    </div>
  );
};

export default ClickableWindow;
