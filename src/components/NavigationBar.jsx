import React from "react";
import Button from "./Button";

const NavigationBar = () => {
  return (
    <nav className="h-[94px] bg-main lg:px-24 lg:py-4 md:p-6 p-4 flex justify-between items-center">
      <h1 className="text-[38px] font-bold text-white">Beud</h1>
      <Button color={"main"} backgroundColor={"white"} />
    </nav>
  );
};

export default NavigationBar;
