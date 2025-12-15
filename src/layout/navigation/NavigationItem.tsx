import type { PropsWithChildren } from "react";
import { NavLink } from "react-router";

interface INavigationItemProps {
  text: string;
  to: string;
  isCollapsed: boolean;
}

const baseNavLinkClass =
  "group navBtn text-grey-300 flex flex-1 flex-col items-center justify-center" +
  " pt-100" +
  " pb-150" +
  " rounded-t-[8px]" +
  " transition-all duration-200" +
  " hover:cursor-pointer md:w-[104px] md:flex-none md:gap-50" +
  " lg:w-auto lg:flex-row lg:justify-start lg:gap-200 lg:px-400 lg:py-200 lg:rounded-l-[0px]" +
  " lg:rounded-br-[8px]";

const baseTextClass =
  "transition-all duration-200 text-preset-5 lg:text-preset-3 hidden overflow-hidden font-bold" +
  " md:block" +
  " lg:text-start" +
  " group-[.btnHoverActiveStates]:text-grey-900 group-hover:text-grey-900 text-nowrap";

function NavigationItem({
  children,
  text,
  to,
  isCollapsed,
}: PropsWithChildren<INavigationItemProps>) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${baseNavLinkClass} ${isActive ? "btnHoverActiveStates" : ""}`
      }
      type="button"
      aria-label={`Navigation item to move to ${text}`}
      to={to}
    >
      {children}
      <span
        className={`${baseTextClass} ${isCollapsed ? "lg:w-0" : "lg:w-[180px]"}`}
      >
        {text}
      </span>
    </NavLink>
  );
}

export default NavigationItem;
