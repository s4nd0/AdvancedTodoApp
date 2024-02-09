import React from "react";

// icons
import ChillIcon from "../icons/ChillIcon.svg";
import ImportantIcon from "../icons/ImportantIcon.svg";
import FilterOnIcon from "../icons/FilterOnIcon.svg";
import FilterOffIcon from "../icons/FilterOffIcon.svg";
import ImgButton from "./ImgButton";

const FilterComponent = ({ setRange, range, setActive, active }) => {
  const handleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div className="flex flex-row items-center justify-start p-4 m-4 mb-0 rounded-md bg-gray-200 dark:bg-gray-700 shadow-lg overflow-hidden text-center text-2xl h-fit">
      <ImgButton
        src={active ? FilterOnIcon : FilterOffIcon}
        alt={active ? "filter-on-icon" : "filter-off-icon"}
        onClick={handleActive}
      />
      {active && (
        <div className="flex flex-row items-center justify-start ml-4 w-full max-w-sm">
          <img
            className="dark:invert h-10 w-10"
            src={ChillIcon}
            alt="chill-icon"
          />
          <label className="w-full">
            <input
              className="cursor-pointer w-full"
              type="range"
              min={1}
              max={5}
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
            />
          </label>
          <img
            className="dark:invert h-10 w-10"
            src={ImportantIcon}
            alt="important-icon"
          />
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
