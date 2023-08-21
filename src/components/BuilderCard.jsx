import React from "react";

const BuilderCard = ({ text }) => {
  return (
    <article className="px-16 py-12 border-[2px] border-black rounded-[30px] w-[343px] max-w-full text-center bg-primary text-base font-semibold text-main md:text-[20px] md:h-[178px] h-[144px] flex items-center justify-center">
      <p>{text}</p>
    </article>
  );
};

export default BuilderCard;
