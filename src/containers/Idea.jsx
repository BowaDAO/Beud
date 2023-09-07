import React from "react";
import { images } from "../constants";

const Idea = () => {
  return (
    <section className="flex items-center lg:flex-row flex-col lg:px-24 pt-12 md:pt-16 bg-light lg:gap-[128px] md:gap-12 gap-8 md:px-[124px] px-4">
      <article className="flex flex-col lg:items-start items-center lg:text-start text-center gap-4 md:gap-8 lg:max-w-[638px]">
        <h2 className="text-2xl md:text-[40px] md:leading-[48px] text-black font-bold lg:max-w-[398px] md:max-w-[509px] max-w-[317px]">
          A Brilliant Problem Solving Idea?
        </h2>
        <p className="md:text-lg text-base font-medium text-grey">
          Join the Beuder ecosystem to transform your brilliant idea into a
          functional product that solves problems. Beuder will form a team of
          passionate tech and non-tech professionals to co-found and build your
          vision into a commercial product under the guidance and mentorship of
          Beuder.
        </p>
      </article>
      <div className="max-w-[482px]">
        <img src={images.idea} className="w-full" />
      </div>
    </section>
  );
};

export default Idea;
