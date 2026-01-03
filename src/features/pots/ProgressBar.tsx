interface IProgressBarProps {
  progress: number;
  color: string;
  progressChange?: number | null;
}

function ProgressBar({
  progress,
  color,
  progressChange = null,
}: IProgressBarProps) {
  console.log(progressChange);
  return (
    <div className="bg-beige-100 flex h-100 w-full gap-50 overflow-hidden rounded-full">
      <div
        className={`h-full ${progressChange !== null ? "" : "rounded-full"}`}
        style={{ backgroundColor: color, width: `${progress}%` }}
      ></div>
      {progressChange !== null && (
        <div
          className="h-full rounded-r-full"
          style={{
            backgroundColor: progressChange < 0 ? "#C94736" : "#277C68",
            width: `${Math.abs(progressChange)}%`,
          }}
        ></div>
      )}
    </div>
  );
}

export default ProgressBar;
