import type { PropsWithChildren } from "react";
function Header({ children }: PropsWithChildren) {
  return (
    <header className="text-grey-900 text-preset-1 leading-preset-1 flex cursor-pointer items-center justify-between font-bold">
      {children}
    </header>
  );
}

export default Header;
