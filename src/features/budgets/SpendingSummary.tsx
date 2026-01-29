import SpendingChart from "./SpendingChart.tsx";
import type { IBudgetItem } from "../../pages/Budgets.tsx";

interface SpendingSummaryProps {
  budgetItems: IBudgetItem[];
}

function SpendingSummary({ budgetItems }: SpendingSummaryProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-300 md:grid-cols-10">
      <div className="flex flex-col gap-400 rounded-lg bg-white p-400 md:col-span-4">
        <SpendingChart budgetItems={budgetItems} />
        <div className="w-full space-y-300">
          <h2 className="text-preset-2 leading-preset-2 text-grey-900 font-bold">
            Spending Summary
          </h2>
          <ul className="divide-grey-100 @container divide-y">
            {budgetItems.map((item: IBudgetItem) => (
              <BudgetCategoryRow key={item.id} budgetItem={item} />
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-lg bg-white md:col-span-6"></div>
    </div>
  );
}

interface IBudgetCategoryRowProps {
  budgetItem: IBudgetItem;
}

function BudgetCategoryRow({ budgetItem }: IBudgetCategoryRowProps) {
  return (
    <li className="flex flex-col items-start justify-between py-200 not-first:not-last:py-200 first:pb-200 last:pt-200 @max-[260px]:space-y-100 @min-[260px]:flex-row @min-[260px]:items-center">
      <span className="flex">
        <span
          className="mr-200 block h-[20px] w-[4px] rounded-full"
          style={{ backgroundColor: budgetItem.theme }}
        ></span>
        <span className="text-preset-4 leading-preset-4 text-grey-500">
          {budgetItem.category.label}
        </span>
      </span>
      <span className="space-x-100">
        <span className="text-preset-3 leading-preset-3 text-grey-900 font-bold">
          ${budgetItem.totalSpent.toFixed(2)}
        </span>
        <span className="text-preset-5 text-grey-500">
          of ${budgetItem.budgetAmount.toFixed(2)}
        </span>
      </span>
    </li>
  );
}

export default SpendingSummary;
