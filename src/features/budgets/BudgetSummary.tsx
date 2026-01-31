interface IBudgetSummaryProps {
  theme: string;
  totalSpent: number;
  remaining: number;
}

function BudgetSummary({ theme, totalSpent, remaining }: IBudgetSummaryProps) {
  return (
    <div className="flex gap-200">
      <div
        className="w-[4px] rounded-lg"
        style={{ backgroundColor: theme }}
      ></div>
      <dl className="flex flex-1 flex-col gap-50">
        <dt className="text-preset-5 text-grey-500 leading-preset-5">Spent</dt>
        <dd className="text-grey-900 text-preset-4 leading-preset-4 font-bold">
          ${totalSpent.toFixed(2)}
        </dd>
      </dl>
      <dl className="flex flex-1 flex-col gap-50">
        <dt className="text-preset-5 text-grey-500 leading-preset-5">Free</dt>
        <dd className="text-grey-900 text-preset-4 leading-preset-4 font-bold">
          ${remaining.toFixed(2)}
        </dd>
      </dl>
    </div>
  );
}

export default BudgetSummary;
