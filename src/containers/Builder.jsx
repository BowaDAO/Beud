import React from "react";

const Builder = () => {
  return (
    <section className="flex items-center flex-col lg:px-24 py-12 md:py-16 lg:gap-11 md:gap-12 gap-8 md:px-[124px] px-4">
      <article className="text-center">
        <h2 className="text-2xl md:text-[40px] md:leading-[48px] text-black font-bold ">
          The Builder Way
        </h2>
        <p className="text-base md:text-lg text-main font-medium">
          Founded in Nigeria Built for Africa.
        </p>
      </article>

      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-y-12 lg:gap-x-6 md:gap-y-[42px] md:gap-x-4">
        <article className="px-16 py-12 border-[2px] border-black rounded-[30px] w-[343px] max-w-full  text-center bg-primary text-base font-semibold text-main md:text-[20px] md:h-[178px] h-[144px] flex items-center justify-center">
          <p>Expert-Vetted projects </p>
        </article>
        <article className="md:p-0 px-16 py-12 border-[2px] border-black rounded-[30px] w-[343px] max-w-full text-center bg-secondary text-base font-semibold text-main md:text-[20px] md:h-[178px] h-[144px] flex items-center justify-center">
          <p>Best & Most Passionate Tech Professionals</p>
        </article>
        <article className="px-16 py-12 border-[2px] border-black rounded-[30px] w-[343px] max-w-full text-center bg-primary text-base font-semibold text-main md:text-[20px] md:h-[178px] h-[144px] flex items-center justify-center">
          <p>Community Support & Mentorship</p>
        </article>
        <article className="px-16 py-12 border-[2px] border-black rounded-[30px] w-[343px] max-w-full text-center bg-secondary text-base font-semibold text-main md:text-[20px] md:h-[178px] h-[144px] flex items-center justify-center">
          <p>Community Support & Mentorship</p>
        </article>
        <article className="px-16 py-12 border-[2px] border-black rounded-[30px] w-[343px] max-w-full text-center bg-primary text-base font-semibold text-main md:text-[20px] md:h-[178px] h-[144px] flex items-center justify-center">
          <p>Community Support & Mentorship</p>
        </article>
      </div>
    </section>
  );
};

export default Builder;
