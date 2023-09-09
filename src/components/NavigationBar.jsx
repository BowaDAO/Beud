import React from "react";
import { icons } from "../constants";

const NavigationBar = ({ openSidebar }) => {
  return (
    <nav className="h-20 md:h-[94px] bg-main lg:px-24 lg:py-4 md:p-6 p-4 flex justify-between items-center">
      <h1 className="text-[38px] font-bold text-white">Beud</h1>

      <span className="hidden lg:inline">
        <button
          className={`text-main bg-white rounded-[30px] md:p-5 px-5 py-4 md:text-lg text-base font-medium md:w-[178px] w-[163px] hover:opacity-80`}
        >
          <a href="https://forms.gle/Ac9jwx2nNwipgFUW7" target="_blank">
            Join the Waitlist
          </a>
        </button>
      </span>

      <button
        onClick={openSidebar}
        className="h-[23px] w-[33px] lg:hidden inline"
      >
        <img src={icons.toggle} />
      </button>
    </nav>
  );
};

export default NavigationBar;
