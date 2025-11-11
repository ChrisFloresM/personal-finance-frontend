import type { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
  return (
    <main className="relative max-w-full flex-1 rounded-[12px] bg-white p-300">
      {children}
    </main>
  );
}

export default Main;
