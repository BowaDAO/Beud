import React from "react";
import { Subscribe } from "../components";
import { useState, useEffect } from "react";

const Newsletter = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let newsletter;

  if (screenWidth > 768) {
    newsletter = (
      <section className="grid place-items-center md:absolute md:left-[50%] md:ml-[-50%] lg:bottom-[320px] w-full ">
        <div className="bg-primary md:px-[72px] md:py-8 lg:px-[191px] lg:py-[56px] md:max-w-[607px] lg:max-w-[1037px] rounded-[30px] flex flex-col items-center justify-center gap-6 lg:gap-12 ">
          <article className="flex flex-col items-center lg:gap-4 gap-2 text-center">
            <h2 className="lg:text-[40px] md:text-[26px] text-black font-bold">
              Subscribe to our newsletter
            </h2>
            <p className="md:text-lg text-base text-white font-medium lg:max-w-[561px]">
              Each newsletter is curated with care to provide you with relevant
              and useful content.
            </p>
          </article>
          <Subscribe />
        </div>
      </section>
    );
  } else {
    newsletter = (
      <section className="w-full bg-primary py-12 px-4 mt-5 flex flex-col gap-2">
        <article className="text-center flex flex-col items-center gap-4">
          <h2 className="lg:text-[40px] md:text-[26px] text-2xl text-black font-bold">
            Subscribe to our newsletter
          </h2>
          <p className="text-base text-white font-medium max-w-[315px] ">
            Subscribe to out newsletter to stay up to date on the Beuder
            ecosystem.
          </p>
        </article>
        <Subscribe />
      </section>
    );
  }

  return <section>{newsletter}</section>;
};

export default Newsletter;
