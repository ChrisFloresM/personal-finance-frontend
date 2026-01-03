interface IProgressBarSummaryProps {
  progress: number;
  target: number;
  color?: string;
}

function ProgressBarSummary({
  progress,
  target,
  color = "#696868",
}: IProgressBarSummaryProps) {
  return (
    <div className="flex justify-between">
      <span
        style={{ color: color }}
        className="text-preset-5 leading-preset-5 font-bold"
      >
        {progress.toFixed(2)}%
      </span>
      <span className="text-preset-5 leading-preset-5 text-grey-500">
        Total of ${target.toFixed(2)}
      </span>
    </div>
  );
}

export default ProgressBarSummary;
