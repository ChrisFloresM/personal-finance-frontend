import PotsOverview from "./PotsOverview.tsx";
import ContentCard from "./ContentCard.tsx";
import CardHeader from "./CardHeader.tsx";
import TransactionsList from "./TransactionsList.tsx";

function Content() {
  return (
    <section className="grid grid-cols-1 gap-200 xl:grid-cols-5 xl:gap-300">
      <div className="col-span-3 space-y-200 xl:space-y-300">
        <PotsOverview />
        <TransactionsOverview />
      </div>
    </section>
  );
}

function TransactionsOverview() {
  return (
    <ContentCard gapSize="medium">
      <CardHeader btnText="View All" navigatePath="/transactions">
        Transactions
      </CardHeader>
      <TransactionsList />
    </ContentCard>
  );
}
export default Content;
