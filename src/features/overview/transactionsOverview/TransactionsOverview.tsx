import ContentCard from "../ContentCard.tsx";
import CardHeader from "../CardHeader.tsx";
import TransactionsList from "./TransactionsList.tsx";

function TransactionsOverview() {
  return (
    <ContentCard gapSize="medium" fillSpace={true}>
      <CardHeader btnText="View All" navigatePath="/transactions">
        Transactions
      </CardHeader>
      <TransactionsList />
    </ContentCard>
  );
}

export default TransactionsOverview;
