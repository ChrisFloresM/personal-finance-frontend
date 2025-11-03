import type { PropsWithChildren } from "react";

interface INavigationItemProps {
  text: string;
}
function NavigationItem({
  children,
  text,
}: PropsWithChildren<INavigationItemProps>) {
  return (
    <button
      className="text-grey-300 flex flex-1 flex-col items-center justify-center pt-100 pb-150"
      type="button"
      aria-label={`Navigation item to move to ${text}`}
    >
      {children}
      <span className="hidden lg:block">{text}</span>
    </button>
  );
}

export default NavigationItem;
