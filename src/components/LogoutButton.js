import React from "react";

// icons
import LogoutIcon from "../icons/LogoutIcon.svg";

// hooks
import { useLogout } from "../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

  return (
    <div
      onClick={logout}
      className="flex flex-col justify-center items-center text-center cursor-pointer ml-6 hover:invert-50 dark:hover:invert-50"
    >
      <img
        className="w-8 h-8 lg:w-10 lg:h-10 dark:invert "
        src={LogoutIcon}
        alt="logout-icon"
      />
      <p className="hidden sm:block">Logout</p>
    </div>
  );
};

export default LogoutButton;
