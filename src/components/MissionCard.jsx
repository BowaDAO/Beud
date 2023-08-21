import React from "react";

const MissionCard = ({ thumbNail, title, body }) => {
  let backgroundColor;
  let color;
  if (title === "our vision") {
    backgroundColor = `#9CBAA6`;
    color = `#F1FFF6`;
  }
  if (title === "talent") {
    backgroundColor = `#F1FFF6`;
    color = `#536258`;
  }
  if (title === "network") {
    backgroundColor = `#9CBAA6`;
    color = `#F1FFF6`;
  }
  if (title === "aspiration") {
    backgroundColor = `#F1FFF6`;
    color = `#536258`;
  }

  return (
    <div
      className={`max-w-[294px] h-[319px] border-[2px] border-black bg-[${backgroundColor}] flex flex-col items-start gap-8 p-[17.5px]`}
    >
      <img src={thumbNail} className="h-[50px] w-[55px] " />
      <article className="flex flex-col items-start gap-[22px]">
        <h4 className="text-main text-xl font-semibold capitalize">{title}</h4>
        <p className={`md:text-lg text-base font-medium text-[${color}]`}>
          {body}
        </p>
      </article>
    </div>
  );
};

export default MissionCard;
//thumbnail
