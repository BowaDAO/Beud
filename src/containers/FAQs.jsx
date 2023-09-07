import { useState } from "react";
import { FAQ } from "../components";
import { faqData } from "../data/data";

const FAQs = () => {
  const [data, setData] = useState(faqData);

  return (
    <section className="flex items-center flex-col lg:px-24 py-12 lg:mb-6 md:py-16 lg:gap-11 md:gap-12 gap-8 md:px-[124px] px-4">
      <article className="text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-[40px] md:leading-[48px] text-black font-bold capitalize">
          frequently asked questions
        </h2>
        {/* <p className="text-base md:text-lg text-main font-medium max-w-[303px] md:max-w-[341px] ">
          Here are some of the likely questions you may have for us.
        </p> */}
      </article>

      <div className="flex flex-col gap-4">
        {data.map((item, index) => {
          return <FAQ key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default FAQs;
