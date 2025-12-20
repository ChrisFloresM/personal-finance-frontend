import { formatAmount, formatDate } from "../../utils/utils.ts";
import type { Itransaction } from "./TransactionsTable.tsx";
import TransactionForm from "./form/TransactionForm.tsx";
import ModalButtonOption from "../../components/ModalButtonOption.tsx";
import DeleteForm from "../../components/DeleteForm.tsx";

function TransactionRow({ transaction }: { transaction: Itransaction }) {
  const { transactionId, avatar, name, date, category, amount } = transaction;

  return (
    <tr className="[&_td]:text-preset-5 [&_td]:leading-preset-5 [&_td]:text-beige-500 grid grid-cols-7 items-center gap-x-300 py-150 [&_td]:text-start [&_td]:font-normal">
      <td className="col-span-4 flex items-center gap-150 md:col-span-3">
        <div className="w-[32px]">
          <img
            src={avatar}
            alt="An avatar of the related transaction"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-50">
          <span className="text-preset-4 text-grey-900 leading-preset-4 font-bold">
            {name}
          </span>
          <span className="md:hidden">{category}</span>
        </div>
      </td>
      <td className="col-span-1 hidden md:block">{category}</td>
      <td className="col-span-1 hidden md:block">{formatDate(date)}</td>
      <td className="col-span-2 flex flex-col gap-50 md:col-span-1">
        <span
          className={`${amount < 0 ? "text-grey-900" : "text-green"} text-preset-4 leading-preset-4 text-end font-bold`}
        >
          {formatAmount(amount)}
        </span>
        <span className="text-[10px] md:hidden">{formatDate(date)}</span>
      </td>
      <td className="flex flex-col justify-end gap-200 md:flex-row">
        <ModalButtonOption type="edit">
          <TransactionForm transactionData={transaction} isEditing />
        </ModalButtonOption>
        <ModalButtonOption type="delete">
          <DeleteForm itemName="transaction" transactionId={transactionId} />
        </ModalButtonOption>
      </td>
    </tr>
  );
}
export default TransactionRow;
