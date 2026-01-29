import Header from "../layout/Header.tsx";
import ModalButton from "../components/ModalButton.tsx";
import SpendingSummary from "../features/budgets/SpendingSummary.tsx";
import useBudgets from "../features/budgets/useBudgets.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import type { ICategory } from "../hooks/useCategories.ts";

export interface IBudgetItem extends Record<string, unknown> {
  id: number;
  category: ICategory;
  budgetAmount: number;
  theme: string;
  totalSpent: number;
  remaining: number;
}

/*const budgetItems: IBudgetItem[] = [
  {
    id: 1,
    category: {
      id: 1,
      key: "enterteinment",
      label: "Enterteinment",
    },
    budgetAmount: 50,
    theme: "#277C68",
    totalSpent: 15,
    remaining: 35,
  },
  {
    id: 2,
    category: {
      id: 2,
      key: "bills",
      label: "Bills",
    },
    budgetAmount: 750,
    theme: "#82C9D7",
    totalSpent: 150,
    remaining: 600,
  },
  {
    id: 3,
    category: {
      id: 3,
      key: "dinningOut",
      label: "Dinning Out",
    },
    budgetAmount: 750,
    theme: "#F2CDAC",
    totalSpent: 133.75,
    remaining: 750 - 133.75,
  },
  {
    id: 4,
    category: {
      id: 4,
      key: "personalCare",
      label: "Personal Care",
    },
    budgetAmount: 100,
    theme: "#626070",
    totalSpent: 40,
    remaining: 60,
  },
];*/

function Budgets() {
  /* Obtain budgets from API */
  const { isLoading, data, error } = useBudgets();
  const budgetItems: IBudgetItem[] = data || [];

  console.log(budgetItems);

  if (error) {
    return <div>Error loading the items: {error.message}</div>;
  }

  return (
    <>
      <Header>
        <h1>Budgets</h1>
        <div>
          <ModalButton buttonTitle="+Add New Budget" variation="primary">
            <p>Add new Budget</p>
          </ModalButton>
        </div>
      </Header>
      <main className="flex">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <SpendingSummary budgetItems={budgetItems} />
        )}
      </main>
    </>
  );
}

export default Budgets;
