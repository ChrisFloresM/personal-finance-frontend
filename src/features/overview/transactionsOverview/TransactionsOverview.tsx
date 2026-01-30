import ContentCard from "../ContentCard.tsx";
import CardHeaderWithLink from "../../../components/CardHeaderWithLink.tsx";
import TransactionsList from "./TransactionsList.tsx";

function TransactionsOverview() {
  return (
    <ContentCard gapSize="medium" fillSpace={true}>
      <CardHeaderWithLink btnText="View All" navigatePath="/transactions">
        Transactions
      </CardHeaderWithLink>
      <TransactionsList />
    </ContentCard>
  );
}

export default TransactionsOverview;
