import React from "react";
import { images } from "../constants";

const Tech = () => {
  return (
    <section className="flex items-center lg:flex-row flex-col lg:px-24 py-12 md:py-16 lg:gap-11 md:gap-12 gap-8 md:px-[124px] px-4">
      <div className="max-w-[605px]">
        <img src={images.techie} className="w-full" />
      </div>

      <article className="flex flex-col lg:items-start items-center lg:text-start text-center gap-4 md:gap-8 lg:max-w-[598px]">
        <h1 className="text-2xl md:text-[40px] md:leading-[48px] text-black font-bold md:max-w-[466px] max-w-[325px]">
          You Have The Tech Skill What Next?
        </h1>
        <p className="md:text-lg text-base font-medium text-grey">
          You have acquired extraordinary technical skills, thanks to your
          zealousness and desire to thrive. But what next? Join the saturated
          employment market?. Not a bad idea if you ask us, but we know a better
          one. Team up with other talents to build exciting products and become
          a co-founder.
        </p>

        <button
          className={`text-main bg-white border-[2px] border-main rounded-[30px] md:p-5 px-5 py-4 md:text-lg text-base font-medium md:w-[178px] w-[163px] lg:mt-[-8px] mt-4`}
        >
          Join the Waitlist
        </button>
      </article>
    </section>
  );
};

export default Tech;
