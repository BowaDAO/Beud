import React from "react";
import { icons } from "../constants";
import { MissionCard } from "../components";

const missionData = [
  {
    id: 1,
    thumbNail: icons.vision,
    title: "our vision",
    body: "We envision a world where every African with a brilliant tech idea becomes a founder.",
  },
  {
    id: 2,
    thumbNail: icons.talent,
    title: "talent",
    body: "We envision a world where  passionate tech professionals become co-founders.",
  },
  {
    id: 3,
    thumbNail: icons.network,
    title: "network",
    body: "We are building a vibrant ecosystem of young talents ready to unleash technological innovations into Africa.",
  },
  {
    id: 4,
    thumbNail: icons.aspire,
    title: "aspiration",
    body: "We envision a world where Africa births hundreds of unicorns in years to come.",
  },
];

const Mission = () => {
  return (
    <section className="px-4 py-12 md:px-[111px] md:py-16 lg:py-16 lg:px-24 flex flex-col items-center lg: gap-12">
      <div className="flex flex-col gap-4 items-center text-center lg:max-w-[825px] md:max-w-[571px] ">
        <h2 className="text-black font-bold text-2xl md:text-[40px] md:leading-[48px] max-w-[335px] md:max-w-[554px] ">
          Building A Thousand Unicorn Out Of Africa
        </h2>
        <p className="text-grey font-medium text-base md:text-lg">
          We believe in African brilliance. We understand that many gifted
          individuals are unable to transform their problem-solving ideas into
          functional products while many African tech experts are unable to make
          the most of their technical knowledge
        </p>
      </div>
      <div className="grid xl:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {missionData.map((item) => {
          return <MissionCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Mission;
