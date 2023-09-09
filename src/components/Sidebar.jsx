import { icons } from "../constants";
import { useResize } from "../hooks/useResize";

const Sidebar = ({ closeSidebar, isSidebarOpen }) => {
  const { screenWidth } = useResize();

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
        <a
          href="https://forms.gle/Ac9jwx2nNwipgFUW7"
          target="_blank"
          onClick={closeSidebar}
          className={`text-main bg-white  rounded-[30px] md:p-5 px-5 py-4 md:text-lg text-base font-medium md:w-[178px] w-[163px]`}
        >
          Join the Waitlist
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
