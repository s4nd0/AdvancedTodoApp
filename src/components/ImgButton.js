import React from "react";

const ImgButton = ({ src, alt, onClick, turned }) => {
  return (
    <>
      <img
        className={`w-12 h-12 cursor-pointer dark:invert ${
          !turned && "rotate-180"
        }`}
        src={src}
        alt={alt}
        onClick={onClick}
      />
    </>
  );
};

export default ImgButton;
