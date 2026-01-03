import ProgressBar from "./ProgressBar.tsx";
import ProgressBarSummary from "./ProgressBarSummary.tsx";

export interface IPotStatsProps {
  target: number;
  total: number;
  theme: string;
}

function PotStats({ target, total, theme }: IPotStatsProps) {
  const potProgress = (total / target) * 100;

  return (
    <>
      <dl className="flex items-center justify-between">
        <dt className="text-preset-4 leading-preset-4 text-grey-500">
          Total Saved
        </dt>
        <dd className="text-grey-900 text-preset-1 leading-preset-1 font-bold">
          ${total.toFixed(2)}
        </dd>
      </dl>
      <div className="space-y-200">
        <ProgressBar progress={potProgress} color={theme} />
        <ProgressBarSummary progress={potProgress} target={target} />
      </div>
    </>
  );
}

export default PotStats;
