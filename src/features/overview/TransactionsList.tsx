import type { Itransaction } from "../transactions/TransactionsTable.tsx";
import { formatAmount, formatDate } from "../../utils/utils.ts";

/* TODO: Use same data as transactions page */
const rawTransactions: Itransaction[] = [
  {
    avatar: "/images/avatars/emma-richardson.jpg",
    name: "Emma Richardson",
    category: "General",
    date: "2024-08-19T14:23:11Z",
    amount: 75.5,
    recurring: false,
  },
  {
    avatar: "/images/avatars/savory-bites-bistro.jpg",
    name: "Savory Bites Bistro",
    category: "Dining Out",
    date: "2024-08-19T20:23:11Z",
    amount: -55.5,
    recurring: false,
  },
  {
    avatar: "/images/avatars/daniel-carter.jpg",
    name: "Daniel Carter",
    category: "General",
    date: "2024-08-18T09:45:32Z",
    amount: -42.3,
    recurring: false,
  },
  {
    avatar: "/images/avatars/sun-park.jpg",
    name: "Sun Park",
    category: "General",
    date: "2024-08-17T16:12:05Z",
    amount: 120.0,
    recurring: false,
  },
  {
    avatar: "/images/avatars/urban-services-hub.jpg",
    name: "Urban Services Hub",
    category: "General",
    date: "2024-08-17T21:08:09Z",
    amount: -65.0,
    recurring: false,
  },
];

function TransactionsList() {
  return (
    <ul className="divide-grey-100 divide-y-1">
      {rawTransactions.map((transaction) => (
        <TransactionItem key={transaction.name} transaction={transaction} />
      ))}
    </ul>
  );
}

interface ISingleTransactionOverviewProps {
  transaction: Itransaction;
}
function TransactionItem({ transaction }: ISingleTransactionOverviewProps) {
  const { avatar, name, date, amount } = transaction;
  const amountColor = amount > 0 ? "text-green" : "text-grey-900";

  return (
    <li className="flex justify-between not-first:not-last:py-250 first:pb-250 last:pt-250">
      <div className="flex items-center gap-200">
        <div className="w-[32px]">
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className="rounded-full"
          />
        </div>
        <p className="text-preset-4 text-grey-900 leading-preset-4 font-bold">
          {name}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <span
          className={`${amountColor} text-preset-4 leading-preset-4 font-bold`}
        >
          {formatAmount(amount)}
        </span>
        <span className="text-preset-5 leading-preset-5 text-grey-500">
          {formatDate(date)}
        </span>
      </div>
    </li>
  );
}

export default TransactionsList;
