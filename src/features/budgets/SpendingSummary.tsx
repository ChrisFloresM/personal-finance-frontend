import SpendingChart from "./SpendingChart.tsx";
import type { IBudgetItem } from "../../pages/Budgets.tsx";
import BudgetCategoryRow from "./BudgetCategoryRow.tsx";

interface SpendingSummaryProps {
  budgetItems: IBudgetItem[];
  reducedList?: boolean;
}

function SpendingSummary({
  budgetItems,
  reducedList = false,
}: SpendingSummaryProps) {
  const budgetList = reducedList ? budgetItems.slice(0, 2) : budgetItems;
  return (
    <>
      <div className="flex flex-col gap-400 self-start rounded-lg bg-white p-400 md:col-span-4">
        <SpendingChart budgetItems={budgetItems} />
        <div className="w-full space-y-300">
          <h2 className="text-preset-2 leading-preset-2 text-grey-900 font-bold">
            Spending Summary
          </h2>
          <ul className="divide-grey-100 @container divide-y">
            {budgetList.map((item: IBudgetItem) => (
              <BudgetCategoryRow key={item.id} budgetItem={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SpendingSummary;
