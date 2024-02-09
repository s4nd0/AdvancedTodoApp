import React from "react";

const ImgButton = ({ src, alt, onClick, turned }) => {
  return (
    <>
      <img
        className={`w-12 h-12 cursor-pointer dark:invert hover:invert-50 dark:hover:invert-50 ${
          turned === false && "rotate-180"
        }`}
        src={src}
        alt={alt}
        onClick={onClick}
      />
    </>
  );
};

export default ImgButton;
