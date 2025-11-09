import type { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
  return (
    <main className="max-w-full rounded-[12px] bg-white p-300">{children}</main>
  );
}

export default Main;
