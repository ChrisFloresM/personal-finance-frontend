import CardHeaderWithLink from "../../components/CardHeaderWithLink.tsx";

import CardHeaderWithOptions from "../../components/CardHeaderWithOptions.tsx";
import type { IBudgetItemWList } from "../../pages/Budgets.tsx";
import BudgetTransactions from "./BudgetTransactions.tsx";
import BudgetSummary from "./BudgetSummary.tsx";
import BudgetProgress from "./BudgetProgress.tsx";
import { useModalContext } from "../../context/useModalContext.ts";
import BudgetForm from "./form/BudgetForm.tsx";
import DeleteForm from "../../components/DeleteForm.tsx";
import { useDeleteBudget } from "./UseDeleteBudget.ts";

interface IBudgetCardProps {
  budget: IBudgetItemWList;
}

function BudgetCard({ budget }: IBudgetCardProps) {
  const {
    id,
    category: { label: categoryLabel, key: categoryKey },
    theme,
    budgetAmount,
    totalSpent,
    latestTransactions,
  } = budget;

  const { handleOpen } = useModalContext();

  const { mutate, isPending } = useDeleteBudget(id);

  const remainingPercentage = 100 - (totalSpent / budgetAmount) * 100;
  const remaining = budgetAmount - totalSpent;

  function handleOpenEdit() {
    handleOpen(<BudgetForm budgetData={budget} isEditing />);
  }

  function handleOpenDelete() {
    handleOpen(
      <DeleteForm
        itemName={`Budget for ${categoryLabel} `}
        mutateFn={mutate}
        isPending={isPending}
      />,
    );
  }

  return (
    <li className="flex flex-col gap-250 rounded-xl bg-white p-300 md:p-400">
      <CardHeaderWithOptions
        name={categoryLabel}
        theme={theme}
        handleOpenEdit={handleOpenEdit}
        handleOpenDelete={handleOpenDelete}
      />
      <div className="flex flex-col gap-200">
        <p className="text-grey-500 text-preset-4 leading-preset-4">
          Maximum of ${budgetAmount.toFixed(2)}
        </p>
        <BudgetProgress theme={theme} remaining={remainingPercentage} />
        <BudgetSummary
          theme={theme}
          totalSpent={totalSpent}
          remaining={remaining}
        />
      </div>
      <div className="bg-beige-100 flex flex-col gap-250 rounded-xl p-200 md:p-250">
        <CardHeaderWithLink
          btnText="See All"
          navigatePath={`/transactions?category=${categoryKey}`}
        >
          Latest Spending
        </CardHeaderWithLink>
        <BudgetTransactions latestTransactions={latestTransactions} />
      </div>
    </li>
  );
}

export default BudgetCard;
