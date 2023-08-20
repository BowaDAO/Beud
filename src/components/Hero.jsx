import React from "react";
import Button from "./Button";
import { images } from "../constants";

const Hero = () => {
  return (
    <hero className="px-4 py-12 md:px-[127px] md:py-16 lg:px-24 lg:py-16  bg-light flex flex-col lg:flex-row justify-between gap-24 items-center">
      <div className="flex flex-col gap-8">
        <article className="max-w-[567px] flex flex-col items-start gap-6 lg:text-center">
          <h1 className="lg:text-[48px] lg:leading-[58px] text-4xl leading-10  text-black font-bold ">
            We Birth The Founders And Co-Founders Of The Future
          </h1>
          <h2 className="lg:text-lg text-base text-grey">
            Rethink your career strategy. Not everyone will work for a unicorn,
            why don’t you join hands with other top talents to build one? The
            Builder helps brilliant tech and non-tech individuals transform
            their unique problem-solving ideas into commercial products. We
            bring talents with technical skills and geniuses with brilliant
            product ideas together to build. 
          </h2>
        </article>
        <Button color={"light"} backgroundColor={"main"} />
      </div>
      <div className="max-w-full md:w-[586px] md:h-[551px] h-[330px]">
        <img
          src={images.heroimage}
          alt="A techie holding a laptop"
          className="w-full h-full"
        />
      </div>
    </hero>
  );
};

export default Hero;
