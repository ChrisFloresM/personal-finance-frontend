import Navigation from "./navigation/Navigation.tsx";
import SidebarButton from "./SidebarButton.tsx";
import { useState } from "react";
import Logo from "./Logo.tsx";

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    /* prettier-ignore */
    <aside className="
    bg-grey-900 fixed z-10 bottom-0 w-full flex-col gap-300 rounded-t-lg px-300 pt-100
    lg:static lg:flex lg:min-h-dvh lg:w-auto lg:rounded-l-none lg:rounded-r-2xl lg:p-0
    ">
      <Logo isCollapsed={isCollapsed}/>
      <Navigation isCollapsed={isCollapsed} />
      <SidebarButton isCollapsed={isCollapsed} onClick={toggleCollapsed}/>
    </aside>
  );
}

export default SideBar;
