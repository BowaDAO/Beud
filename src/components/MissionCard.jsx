import React from "react";

const MissionCard = ({ thumbNail, title, body, backgroundColor, color }) => {
  return (
    <div
      className={`max-w-[294px] h-[319px] border-[2px] border-black bg-[${backgroundColor}] flex flex-col items-start gap-8 p-[17.5px]`}
    >
      <img src={thumbNail} className="h-[50px] w-[55px] " />
      <article className="flex flex-col items-start gap-[22px]">
        <h4 className="text-main text-xl font-semibold">{title}</h4>
        <p className={`text-lg font-medium text-[${color}]`}>{body}</p>
      </article>
    </div>
  );
};

export default MissionCard;
//thumbnail
