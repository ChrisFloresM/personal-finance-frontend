import useBudgets from "../../budgets/useBudgets.tsx";
import ErrorMessage from "../../../components/ErrorMessage.tsx";
import ContentCard from "../ContentCard.tsx";
import CardHeaderWithLink from "../../../components/CardHeaderWithLink.tsx";
import LoadingSpinner from "../../../components/LoadingSpinner.tsx";
import SpendingSummary from "../../budgets/SpendingSummary.tsx";

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
        ) : budgetItems.length == 0 ? (
          <p className="text-preset-4 leading-preset-4 text-grey-500 text-center">
            You have no budgets yet
          </p>
        ) : (
          <SpendingSummary budgetItems={budgetItems} reducedList />
        )}
      </div>
    </ContentCard>
  );
}

export default BudgetsOverview;
