import type { PropsWithChildren } from "react";

interface IContentCardProps {
  gapSize: "small" | "medium";
}

function ContentCard({
  gapSize,
  children,
}: PropsWithChildren<IContentCardProps>) {
  const gap = gapSize === "small" ? "gap-250" : "gap-400";
  return (
    <div
      className={`${gap} flex flex-col rounded-[12px] bg-white px-250 py-300 md:p-400`}
    >
      {children}
    </div>
  );
}

export default ContentCard;
