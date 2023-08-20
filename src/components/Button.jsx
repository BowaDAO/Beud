import React from "react";

const Button = ({ color, backgroundColor, borderWidth, borderColor }) => {
  return (
    <button
      className={`text-${color} bg-${backgroundColor} border-${borderWidth} border-${borderColor} rounded-[30px] md:p-5 px-5 py-4 lg:text-lg text-base font-medium lg:w-[178px] w-[163px]`}
    >
      Join the Waitlist
    </button>
  );
};

export default Button;
