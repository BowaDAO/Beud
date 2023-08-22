import React from "react";
import { icons } from "../constants";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-[18.5px]">
      <a
        href=""
        className="h-[28px] w-[28px] bg-white rounded-full flex items-center justify-center"
      >
        <img src={icons.twitter} className="h-[20px] w-[20px]" />
      </a>
      <span className="h-[28px] w-[28px] bg-white rounded-full flex items-center justify-center">
        <a href="">
          {" "}
          <img src={icons.instagram} className="h-[20px] w-[20px]" />
        </a>
      </span>
      <span className="h-[28px] w-[28px] bg-white rounded-full flex items-center justify-center">
        <a href="">
          {" "}
          <img src={icons.linkedin} className="h-[20px] w-[20px]" />
        </a>
      </span>
    </div>
  );
};

export default SocialLinks;
