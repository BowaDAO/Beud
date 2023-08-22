import React from "react";
import {
  Header,
  Mission,
  Idea,
  Builder,
  FAQs,
  Footer,
  Newsletter,
  Tech,
} from "../containers";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Mission />
      <Idea />
      <Tech />
      <Builder />
      <FAQs />
      <div className="relative">
        <div className="lg:h-[250px] md:h-[200px]">
          <Newsletter />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
