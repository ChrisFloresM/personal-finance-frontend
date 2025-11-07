import type { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
  return (
    <main className="overflow-hidden rounded-[12px] bg-white">{children}</main>
  );
}

export default Main;
