import React from "react";
import Button from "./Button";
import { images } from "../constants";

const Hero = () => {
  return (
    <section className="px-4 py-12 md:px-[127px] md:py-16 lg:px-24 lg:py-16  bg-light flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-24 items-center">
      <div className="flex flex-col items-start md:items-center lg:items-start gap-6 md:gap-8">
        <article className="lg:max-w-[567px] flex flex-col items-start gap-4 lg:gap-6 text-start md:text-center lg:text-start ">
          <h1 className="md:text-[48px] md:leading-[58px] text-4xl leading-10  text-black font-bold ">
            We Birth The Founders And Co-Founders Of The Future
          </h1>
          <h2 className="md:text-lg text-base font-medium text-grey">
            Rethink your career strategy. Not everyone will work for a unicorn,
            why don’t you join hands with other top talents to build one? The
            Builder helps brilliant tech and non-tech individuals transform
            their unique problem-solving ideas into commercial products. We
            bring talents with technical skills and geniuses with brilliant
            product ideas together to build. 
          </h2>
        </article>
        <button
          className={`text-white bg-main hover:bg-white hover:text-main hover:border-[2px] hover:border-main rounded-[30px] md:p-5 px-5 py-4 md:text-lg text-base font-medium md:w-[178px] w-[163px]`}
        >
          Join the Waitlist
        </button>
      </div>
      <div className="w-full lg:w-[583px] h-full ">
        {/* md:w-[583px] md:h-[551px] */}
        <img
          src={images.heroimage}
          alt="A techie holding a laptop"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
