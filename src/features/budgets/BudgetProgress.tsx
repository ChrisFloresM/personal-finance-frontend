interface IBudgetProgressProps {
  theme: string;
  remaining: number;
}

function BudgetProgress({ theme, remaining }: IBudgetProgressProps) {
  return (
    <div className="bg-beige-100 h-[32px] w-full rounded-sm p-50">
      <div
        className="h-full w-full rounded-sm"
        style={{ backgroundColor: theme, width: `${remaining}%` }}
      ></div>
    </div>
  );
}

export default BudgetProgress;
