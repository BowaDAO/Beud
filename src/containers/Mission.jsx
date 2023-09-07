import React from "react";
import { icons } from "../constants";
import { MissionCard } from "../components";

const missionData = [
  {
    id: 1,
    thumbNail: icons.vision,
    title: "vision",
    body: "Birth founders and co-founders motivated to build problem-solving, commercial products.",
  },
  {
    id: 2,
    thumbNail: icons.talent,
    title: "talent",
    body: "Unlock the potential of tech talents in Africa to build products that can compete globally.",
  },
  {
    id: 3,
    thumbNail: icons.network,
    title: "network",
    body: "Build a vibrant ecosystem of young talents ready to unleash technological innovation in Africa.",
  },
  {
    id: 4,
    thumbNail: icons.aspire,
    title: "aspiration",
    body: "Develop hundreds of globally-dominant tech products in Africa in the next few years.",
  },
];

const Mission = () => {
  return (
    <section className="px-4 py-12 md:px-[111px] md:py-16 lg:py-16 lg:px-24 flex flex-col items-center lg: gap-12">
      <div className="flex flex-col gap-4 items-center text-center lg:max-w-[825px] md:max-w-[571px] ">
        <h2 className="text-black font-bold text-2xl md:text-[40px] md:leading-[48px] max-w-[335px] md:max-w-[554px] ">
          Building A Thousand Products Out Of Africa
        </h2>
        <p className="text-grey font-medium text-base md:text-lg">
          Beuder believes in African brilliance and understands that many gifted
          individuals cannot transform their unique ideas into functional
          products, and many tech talents lack the opportunity to put their
          technical knowledge into commercial usage.
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
