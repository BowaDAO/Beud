import { useState } from "react";
import { MissionCard } from "../components";
import { missionData } from "../data/data";

const Mission = () => {
  const [data, setData] = useState(missionData);
  return (
    <section className="px-4 py-12 md:px-[111px] md:py-16 lg:py-16 lg:px-24 flex flex-col items-center lg: gap-12">
      <div className="flex flex-col gap-4 items-center text-center lg:max-w-[825px] md:max-w-[571px] ">
        <h2 className="text-black font-bold text-2xl md:text-[40px] md:leading-[48px] max-w-[335px] md:max-w-[554px] ">
          Building A Hundred Unicorns Out Of Africa
        </h2>
        <p className="text-grey font-medium text-base md:text-lg">
          Beuder believes in African brilliance. We envision exploiting this
          brilliance to foster hundreds of unicorns out of Africa in the next
          decades.
        </p>
      </div>
      <div className="grid xl:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {data.map((item) => {
          return <MissionCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Mission;
