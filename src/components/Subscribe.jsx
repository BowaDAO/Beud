import React from "react";

const Subscribe = () => {
  return (
    <div className="relative lg:w-[535px] md:w-[358px]">
      <input
        type="text"
        placeholder="beud@gmail.com"
        className="rounded-[30px] w-full text-black bg-light py-1 pl-4 pr-2 h-[55px] outline-none text-base md:text-lg"
      />
      <button className="rounded-[30px] bg-main text-white p-4 absolute right-2 text-[12px] h-[47px] top-1">
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
