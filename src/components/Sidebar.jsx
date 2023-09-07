import { useState, useEffect } from "react";
import { icons } from "../constants";

const Sidebar = ({ closeSidebar, isSidebarOpen }) => {
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

  if (screenWidth > 1024) {
    closeSidebar();
  }

  return (
    <aside
      className={`${
        isSidebarOpen ? "traslate-x-[100%]" : "translate-x-[-100%]"
      } w-full h-full bg-main fixed top-0 left-0 transition-all duration-300 p-5`}
    >
      <button onClick={closeSidebar} className="float-right">
        <img src={icons.close} className="h-10 w-10 md:h-12 md:w-12 " />
      </button>
      <div className="mt-12 flex items-center justify-center h-full">
        <button
          className={`text-main bg-white  rounded-[30px] md:p-5 px-5 py-4 md:text-lg text-base font-medium md:w-[178px] w-[163px]`}
        >
          Join the Waitlist
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
