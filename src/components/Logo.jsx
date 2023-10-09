import React from "react";
import { images } from "../constants";

const Logo = () => {
  return (
    <img
      src={images.logo}
      alt="logo"
      className="object-contain md:w-[120px] w-[100px]"
    />
  );
};

export default Logo;
