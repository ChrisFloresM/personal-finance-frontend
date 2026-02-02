import PotsOverview from "./potsOverview/PotsOverview.tsx";
import TransactionsOverview from "./transactionsOverview/TransactionsOverview.tsx";
import ContentCard from "./ContentCard.tsx";
import CardHeaderWithLink from "../../components/CardHeaderWithLink.tsx";
import useBudgets from "../budgets/useBudgetsWTransactions.ts";
import SpendingSummary from "../budgets/SpendingSummary.tsx";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";
import ErrorMessage from "../../components/ErrorMessage.tsx";

function Content() {
  return (
    <section className="grid h-full grid-cols-1 gap-200 xl:grid-cols-5 xl:gap-300">
      <div className="col-span-3 flex flex-col space-y-200 xl:space-y-300">
        <PotsOverview />
        <TransactionsOverview />
      </div>
      <div className="col-span-2 self-stretch">
        <BudgetsOverview />
      </div>
    </section>
  );
}

function BudgetsOverview() {
  const { isLoading, data, error } = useBudgets();

  const budgetItems = data || [];

  if (error) {
    return (
      <ErrorMessage>
        Error obtaining data from the server: {error.message}
      </ErrorMessage>
    );
  }

  return (
    <ContentCard gapSize="small">
      <CardHeaderWithLink btnText="See Details" navigatePath="/budgets">
        Budgets
      </CardHeaderWithLink>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <SpendingSummary budgetItems={budgetItems} reducedList />
        )}
      </div>
    </ContentCard>
  );
}

export default Content;
