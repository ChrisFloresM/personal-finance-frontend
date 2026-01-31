import { type IBudgetItemWList } from "../../pages/Budgets.tsx";
import BudgetCard from "./BudgetCard.tsx";

interface IBudgetsListProps {
  budgetItems: IBudgetItemWList[];
}

function BudgetsList({ budgetItems }: IBudgetsListProps) {
  return (
    <div className="rounded-lg md:col-span-6">
      <ul className="flex flex-col gap-300">
        {budgetItems.map((budget) => (
          <BudgetCard key={budget.id} budget={budget} />
        ))}
      </ul>
    </div>
  );
}

export default BudgetsList;
