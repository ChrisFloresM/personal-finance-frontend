import { formatAmount, formatDate } from "../../utils/utils.ts";
import type { Itransaction } from "../transactions/TransactionsTable.tsx";

interface IBudgetTransactionitemProps {
  transaction: Itransaction;
}

function BudgetTransactionItem({ transaction }: IBudgetTransactionitemProps) {
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

export default BudgetTransactionItem;
