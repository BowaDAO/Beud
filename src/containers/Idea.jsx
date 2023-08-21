import React from "react";
import { images } from "../constants";

const Idea = () => {
  return (
    <section className="flex items-center lg:flex-row flex-col lg:px-24 pt-12 md:pt-16 bg-light lg:gap-[128px] md:gap-12 gap-8 md:px-[124px] px-4">
      <article className="flex flex-col lg:items-start items-center lg:text-start text-center gap-4 md:gap-8 lg:max-w-[638px]">
        <h1 className="text-2xl md:text-[40px] lg:leading-[48px] text-black font-bold lg:max-w-[398px] md:max-w-[509px]">
          A Brilliant Problem Solving Tech Idea?
        </h1>
        <p className="text-lg font-medium text-grey">
          Ideas die. Don’t let yours do. We will stand by you to transform your
          brilliant idea into a fully functional product that solves problems.
          We will form a team of passionate tech and non-tech talents to
          co-found and build your idea into a commercial product under the
          guidance and mentorship of The Builder. Get those proposals together
          while you are on the waitlist.
        </p>
      </article>
      <div className="max-w-[482px]">
        <img src={images.idea} className="w-full" />
      </div>
    </section>
  );
};

export default Idea;
