import React from "react";

//Component that renders each square card on the first section after the hero container
const MissionCard = ({ thumbNail, title, body, id }) => {
  let backgroundColor;
  let color;
  if (id === 1) {
    backgroundColor = "primary";
    color = "light";
  }
  if (id === 2) {
    backgroundColor = "light";
    color = "grey";
  }
  if (id === 3) {
    backgroundColor = "primary";
    color = "light";
  }
  if (id === 4) {
    backgroundColor = "light";
    color = "grey";
  }

  return (
    <div
      className={`max-w-[294px] h-[319px] border-[2px] border-black bg-${backgroundColor} flex flex-col items-start gap-8 p-[17.5px]`}
    >
      <img src={thumbNail} className="h-[50px] w-[55px] " />
      <article className="flex flex-col items-start gap-[22px]">
        <h4 className="text-main text-xl font-semibold capitalize">{title}</h4>
        <p className={`md:text-lg text-base font-medium text-${color}`}>
          {body}
        </p>
      </article>
    </div>
  );
};

export default MissionCard;
//thumbnail
