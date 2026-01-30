import { type IBudgetItem } from "../../pages/Budgets.tsx";
import CardHeaderWithOptions from "../../components/CardHeaderWithOptions.tsx";
import CardHeaderWithLink from "../../components/CardHeaderWithLink.tsx";
import type { Itransaction } from "../transactions/TransactionsTable.tsx";
import { formatAmount, formatDate } from "../../utils/utils.ts";

interface IBudgetsListProps {
  budgetItems: IBudgetItem[];
}

const tempItems: Itransaction[] = [
  {
    transactionId: 1,
    avatar: "/images/avatars/spark-electric-solutions.jpg",
    name: "Pixel Playground",
    category: {
      id: 1,
      key: "general",
      label: "General",
    },
    date: "2025-12-22",
    amount: 200,
    recurring: false,
  },
  {
    transactionId: 2,
    avatar: "/images/avatars/spark-electric-solutions.jpg",
    name: "Pixel Playground",
    category: {
      id: 1,
      key: "general",
      label: "General",
    },
    date: "2025-12-22",
    amount: 200,
    recurring: false,
  },
  {
    transactionId: 3,
    avatar: "/images/avatars/spark-electric-solutions.jpg",
    name: "Pixel Playground",
    category: {
      id: 1,
      key: "general",
      label: "General",
    },
    date: "2025-12-22",
    amount: 200,
    recurring: false,
  },
];

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

interface IBudgetCardProps {
  budget: IBudgetItem;
}

function BudgetCard({ budget }: IBudgetCardProps) {
  const {
    category: { label: categoryLabel },
    theme,
    budgetAmount,
    totalSpent,
  } = budget;

  const remainingPercentage = 100 - (totalSpent / budgetAmount) * 100;
  const remaining = budgetAmount - totalSpent;

  function handleOpenEdit() {
    console.log("open");
  }

  function handleOpenDelete() {
    console.log("delete");
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
        <div className="bg-beige-100 h-[32px] w-full rounded-sm p-50">
          <div
            className="h-full w-full rounded-sm"
            style={{ backgroundColor: theme, width: `${remainingPercentage}%` }}
          ></div>
        </div>
        <div className="flex gap-200">
          <div
            className="w-[4px] rounded-lg"
            style={{ backgroundColor: theme }}
          ></div>
          <dl className="flex flex-1 flex-col gap-50">
            <dt className="text-preset-5 text-grey-500 leading-preset-5">
              Spent
            </dt>
            <dd className="text-grey-900 text-preset-4 leading-preset-4 font-bold">
              ${totalSpent.toFixed(2)}
            </dd>
          </dl>
          <dl className="flex flex-1 flex-col gap-50">
            <dt className="text-preset-5 text-grey-500 leading-preset-5">
              Free
            </dt>
            <dd className="text-grey-900 text-preset-4 leading-preset-4 font-bold">
              ${remaining.toFixed(2)}
            </dd>
          </dl>
        </div>
      </div>
      <div className="bg-beige-100 flex flex-col gap-250 rounded-xl p-200 md:p-250">
        <CardHeaderWithLink btnText="See All" navigatePath="/transactions">
          Latest Spending
        </CardHeaderWithLink>
        <ul className="divide-grey-300 divide-y">
          {tempItems.map((transaction) => (
            <BudegtTransactionItem
              transaction={transaction}
              key={transaction.transactionId}
            />
          ))}
        </ul>
      </div>
    </li>
  );
}

interface IBudgetTransactionitemProps {
  transaction: Itransaction;
}

function BudegtTransactionItem({ transaction }: IBudgetTransactionitemProps) {
  const { name, avatar, date, amount } = transaction;

  return (
    <li className="flex justify-between not-first:not-last:py-150 first:pb-150 last:pt-150">
      <div className="flex items-center gap-200">
        <div className="hidden w-[32px] md:block">
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className="rounded-full"
          />
        </div>
        <p className="text-preset-5 text-grey-900 leading-preset-5 font-bold">
          {name}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-preset-5 text-grey-900 leading-preset-5 font-bold">
          {formatAmount(amount)}
        </span>
        <span className="text-preset-5 leading-preset-5 text-grey-500">
          {formatDate(date)}
        </span>
      </div>
    </li>
  );
}

export default BudgetsList;
