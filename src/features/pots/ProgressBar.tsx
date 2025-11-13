import type { IPotStatsProps } from "./PotStats.tsx";

function ProgressBar({ total, target, theme }: IPotStatsProps) {
  const progress = (total / target) * 100;
  return (
    <div className="space-y-200">
      <div className="bg-beige-100 h-100 w-full rounded-full">
        <div
          className="h-full rounded-full"
          style={{ backgroundColor: theme, width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <span className="text-preset-5 leading-preset-5 text-grey-500 font-bold">
          {progress.toFixed(2)}%
        </span>
        <span className="text-preset-5 leading-preset-5 text-grey-500">
          Total of ${target.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
