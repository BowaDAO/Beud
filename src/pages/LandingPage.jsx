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
    <main>
      <Header />
      <Mission />
      <Idea />
      <Tech />
      <Builder />
      <FAQs />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default LandingPage;
