import React from "react";
import { SocialLinks, Copyright } from "../components";

const Footer = () => {
  return (
    <footer className="bg-main px-4 py-12 md:px-[230px] md:py-16 lg:py-[150px] flex flex-col items-center justify-center text-center gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-white text-basee md:text-xl font-semibold">
          Follow us on socials
        </p>
        <SocialLinks />
      </div>

      <Copyright />
    </footer>
  );
};

export default Footer;
