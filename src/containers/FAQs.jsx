import React from "react";
import { FAQ } from "../components";

const faqData = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. In id mauris feugiat sem.",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sagittis malesuada quisque elit in ultrices nec. Eget sed sed non hendrerit amet ante auctor at. Eget feugiat tempor morbi tristique elit vulputate. ",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. In id mauris feugiat sem.",
    answer:
      " Lorem ipsum dolor sit amet consectetur. Sagittis malesuada quisque elit in ultrices nec. Eget sed sed non hendrerit amet ante auctor at. Eget feugiat tempor morbi tristique elit vulputate.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. In id mauris feugiat sem.",
    answer:
      " Lorem ipsum dolor sit amet consectetur. Sagittis malesuada quisque elit in ultrices nec. Eget sed sed non hendrerit amet ante auctor at. Eget feugiat tempor morbi tristique elit vulputate.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. In id mauris feugiat sem.",
    answer:
      " Lorem ipsum dolor sit amet consectetur. Sagittis malesuada quisque elit in ultrices nec. Eget sed sed non hendrerit amet ante auctor at. Eget feugiat tempor morbi tristique elit vulputate.",
  },
];

const FAQs = () => {
  return (
    <section className="flex items-center flex-col lg:px-24 py-12 md:py-16 lg:gap-11 md:gap-12 gap-8 md:px-[124px] px-4">
      <article className="text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-[40px] md:leading-[48px] text-black font-bold capitalize">
          frequently asked questions
        </h2>
        <p className="text-base md:text-lg text-main font-medium max-w-[303px] md:max-w-[341px] ">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolorLorem ipsum
          dolor
        </p>
      </article>

      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => {
          return <FAQ key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default FAQs;
