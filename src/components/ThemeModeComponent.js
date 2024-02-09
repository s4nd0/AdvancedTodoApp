import React, { useState } from "react";

// icons
import DarkModeIcon from "../icons/darkModeIcon.svg";
import LightModeIcon from "../icons/LightModeIcon.svg";
import MobileIcon from "../icons/MobileIcon.svg";

// components
import HiddenMenu from "./HiddenMenu";

const ThemeModeComponent = ({ setDarkTheme, darkTheme, osIsDark }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (id) => {
    setShowMenu(false);
    if (id === 1) {
      setDarkTheme(true);
    }
    if (id === 2) {
      setDarkTheme(false);
    }
    if (id === 3) {
      setDarkTheme(osIsDark);
    }
  };

  return (
    <div className="relative pl-14 sm:pl-18">
      <img
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer dark:invert hover:invert-50 dark:hover:invert-50 box-border"
        onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
        src={darkTheme ? DarkModeIcon : LightModeIcon}
        alt={darkTheme ? "dark-mode-icon" : "light-mode-icon"}
      />
      <HiddenMenu
        isOpen={showMenu}
        options={[
          { id: 1, image: DarkModeIcon, value: "Dark" },
          { id: 2, image: LightModeIcon, value: "Light" },
          { id: 3, image: MobileIcon, value: "System" },
        ]}
        handleClick={handleClick}
      />
    </div>
  );
};

export default ThemeModeComponent;
