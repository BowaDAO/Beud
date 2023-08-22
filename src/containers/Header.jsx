import { useState } from "react";
import { NavigationBar, Hero, Sidebar } from "../components";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header>
      <NavigationBar openSidebar={openSidebar} />
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <Hero />
    </header>
  );
};

export default Header;
