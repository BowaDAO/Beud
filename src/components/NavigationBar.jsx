import React from "react";
import Button from "./Button";
import { icons } from "../constants";

const NavigationBar = () => {
  return (
    <nav className="h-[94px] bg-main lg:px-24 lg:py-4 md:p-6 p-4 flex justify-between items-center">
      <h1 className="text-[38px] font-bold text-white">Beud</h1>
      <span className="hidden lg:inline">
        <Button color={"main"} backgroundColor={"white"} />
      </span>

      <button className="h-12 w-12 lg:hidden inline">
        <img src={icons.toggle} />
      </button>
    </nav>
  );
};

export default NavigationBar;
