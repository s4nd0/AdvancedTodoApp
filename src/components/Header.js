import React from "react";

// components
import ThemeModeComponent from "./ThemeModeComponent";
import Logo from "./Logo";

const Header = ({ setDarkTheme, darkTheme }) => {
  const osIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false;

  return (
    <div className="p-4 ease-out duration-100 flex items-center text-black dark:text-white bg-gray-200 dark:bg-gray-700 drop-shadow">
      <Logo text={`EasyTask Manager`} />
      <ThemeModeComponent
        setDarkTheme={setDarkTheme}
        darkTheme={darkTheme}
        osIsDark={osIsDark}
      />
    </div>
  );
};

export default Header;
