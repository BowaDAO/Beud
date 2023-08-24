import React from "react";

const BuilderCard = ({ text, id }) => {
  let backgroundColor;
  if (id === 1) {
    backgroundColor = "primary";
  }
  if (id === 2) {
    backgroundColor = "secondary";
  }
  if (id === 3) {
    backgroundColor = "primary";
  }
  if (id === 4) {
    backgroundColor = "secondary";
  }
  if (id === 5) {
    backgroundColor = "primary";
  }

  return (
    <article
      className={`px-16 py-12 border-[2px] border-black rounded-[30px] w-[343px] max-w-full text-center bg-${backgroundColor} text-base font-semibold text-main md:text-[20px] md:h-[178px] h-[144px] flex items-center justify-center`}
    >
      <p>{text}</p>
    </article>
  );
};

export default BuilderCard;
