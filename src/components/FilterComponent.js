import React from "react";

// icons
import ChillIcon from "../icons/ChillIcon.svg";
import ImportantIcon from "../icons/ImportantIcon.svg";
import FilterOnIcon from "../icons/FilterOnIcon.svg";
import FilterOffIcon from "../icons/FilterOffIcon.svg";
import ToggleIcon from "../icons/ToggleIcon.svg";

// components
import ImgButton from "./ImgButton";

const FilterComponent = ({
  setRange,
  range,
  setActiveRange,
  activeRange,
  setActive,
  active,
  setShowCompleted,
  showCompleted,
}) => {
  const handleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div className="flex flex-col justify-start p-4 m-4 mb-0 rounded-md bg-gray-200 dark:bg-gray-700 shadow overflow-hidden text-center text-xl h-fit">
      <div
        onClick={handleActive}
        className={`flex flex-row items-center cursor-pointer ${
          !active && "invert-50"
        }`}
      >
        <img
          src={FilterOnIcon}
          alt="filter-icon"
          className="w-12 h-12 dark:invert"
        />
        <p className="ml-4">Filter</p>
      </div>

      {active && (
        <>
          <div
            className={`flex flex-row items-center ${
              !showCompleted && "invert-[.40]"
            }`}
          >
            <ImgButton
              src={ToggleIcon}
              alt={"toggle-icon"}
              onClick={() =>
                setShowCompleted((prevShowCompleted) => !prevShowCompleted)
              }
              turned={showCompleted}
            />
            <p className="ml-4">Complete / Incomplete</p>
          </div>

          <div
            className={`flex flex-row items-center ${
              !activeRange && "invert-[.40]"
            }`}
          >
            <ImgButton
              src={ToggleIcon}
              alt={"toggle-icon"}
              onClick={() =>
                setActiveRange((prevActiveRange) => !prevActiveRange)
              }
              turned={activeRange}
            />
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
          </div>
        </>
      )}
    </div>
  );
};

export default FilterComponent;
