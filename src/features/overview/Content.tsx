import PotsOverview from "./potsOverview/PotsOverview.tsx";
import TransactionsOverview from "./transactionsOverview/TransactionsOverview.tsx";
import BudgetsOverview from "./budgetsOverview/BudgetsOverview.tsx";

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

export default Content;
