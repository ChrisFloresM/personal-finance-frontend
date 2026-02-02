import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import SpendingSummary from "../features/budgets/SpendingSummary.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import type { ICategory } from "../hooks/useCategories.ts";
import BudgetsList from "../features/budgets/BudgetsList.tsx";
import type { Itransaction } from "../features/transactions/TransactionsTable.tsx";
import useBudgetsWTransactions from "../features/budgets/useBudgetsWTransactions.ts";
import BudgetForm from "../features/budgets/form/BudgetForm.tsx";

export interface IBudgetItem extends Record<string, unknown> {
  id: number;
  category: ICategory;
  budgetAmount: number;
  theme: string;
  totalSpent: number;
  remaining: number;
}

export interface IBudgetItemWList extends IBudgetItem {
  latestTransactions: Itransaction[];
}

function Budgets() {
  const { isLoading, data, error } = useBudgetsWTransactions();
  const budgetItems: IBudgetItemWList[] = data || [];

  if (error) {
    return <div>Error loading the items: {error.message}</div>;
  }

  return (
    <>
      <Header>
        <h1>Budgets</h1>
        <div>
          <ModalButton buttonTitle="+Add New Budget" variation="primary">
            <BudgetForm />
          </ModalButton>
        </div>
      </Header>
      <main className="flex">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid w-full grid-cols-1 gap-300 md:grid-cols-10">
            <SpendingSummary budgetItems={budgetItems} />
            <BudgetsList budgetItems={budgetItems} />
          </div>
        )}
      </main>
    </>
  );
}

export default Budgets;
