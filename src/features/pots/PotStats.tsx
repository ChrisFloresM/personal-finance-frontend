import ProgressBar from "./ProgressBar.tsx";

export interface IPotStatsProps {
  target: number;
  total: number;
  theme: string;
}

function PotStats({ target, total, theme }: IPotStatsProps) {
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
      <ProgressBar total={total} target={target} theme={theme} />
    </>
  );
}

export default PotStats;
