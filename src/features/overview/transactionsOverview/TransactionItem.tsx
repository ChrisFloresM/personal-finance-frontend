import { formatAmount, formatDate } from "../../../utils/utils.ts";
import type { Itransaction } from "../../transactions/TransactionsTable.tsx";

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

export default TransactionItem;
