import { useState } from "react";
import { BuilderCard } from "../components";
import { builderData } from "../data/data";

const Builder = () => {
  const [data, setData] = useState(builderData);
  return (
    <section className="flex items-center flex-col lg:px-24 py-12 md:py-16 lg:gap-11 md:gap-12 gap-8 md:px-[124px] px-4">
      <article className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl md:text-[40px] md:leading-[48px] text-black font-bold ">
          The Builder Way
        </h2>
        <p className="text-base md:text-lg text-main font-medium">
          Founded in Nigeria, built for Africa.
        </p>
      </article>

      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-y-12 lg:gap-x-6 md:gap-y-[42px] md:gap-x-4">
        {data.map((item) => {
          return <BuilderCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Builder;
