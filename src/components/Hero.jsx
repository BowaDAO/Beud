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
            Rethink your career strategy. Not everyone will be employed by an
            existing tech company. Join other top talents to transform
            brilliant, problem-solving ideas into profitable commercial products
            that can compete globally. We bring together tech talents and
            individuals with transformative product ideas to build and ship.
          </h2>
        </article>
        <button
          className={`text-white bg-main rounded-[30px] md:p-5 px-5 py-4 md:text-lg text-base font-medium md:w-[178px] w-[163px] hover:opacity-80`}
        >
          <a href="  Join the Waitlist" target="_blank">
            Join the Waitlist
          </a>
        </button>
      </div>
      <div className="w-full lg:w-[583px] h-full ">
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
