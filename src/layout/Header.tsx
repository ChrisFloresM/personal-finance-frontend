import type { PropsWithChildren } from "react";
import LogoutButton from "./LogoutButton.tsx";

function Header({ children }: PropsWithChildren) {
  return (
    <header className="text-grey-900 text-preset-1 leading-preset-1 flex items-center justify-between space-x-200 font-bold">
      <div className="flex flex-1 items-center justify-between">{children}</div>
      <LogoutButton />
    </header>
  );
}

export default Header;
