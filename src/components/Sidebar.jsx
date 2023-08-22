import React from "react";
import { useState, useEffect } from "react";

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
      } w-full h-full bg-main fixed top-0 left-0 transition-all duration-300`}
    >
      <button onClick={closeSidebar}>close</button>
    </aside>
  );
};

export default Sidebar;
