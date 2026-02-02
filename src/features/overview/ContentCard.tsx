import type { PropsWithChildren } from "react";

interface IContentCardProps {
  gapSize: "small" | "medium";
  fillSpace?: boolean;
}

function ContentCard({
  gapSize,
  fillSpace = false,
  children,
}: PropsWithChildren<IContentCardProps>) {
  const gap = gapSize === "small" ? "gap-250" : "gap-400";
  return (
    <div
      className={`${gap} ${fillSpace && "flex-1"} relative flex h-full flex-col rounded-xl bg-white px-250 py-300 md:p-400`}
    >
      {children}
    </div>
  );
}

export default ContentCard;
