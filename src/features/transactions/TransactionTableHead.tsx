function TransactionsTableHead() {
  return (
    <thead className="border-b-grey-100 hidden border-b md:block">
      <tr className="[&_th]:text-preset-5 [&_th]:leading-preset-5 [&_th]:text-beige-500 grid grid-cols-6 gap-x-300 py-150 [&_th]:text-start [&_th]:font-normal [&_th:last-child]:text-end">
        <th className="col-span-3">Recipient / Sender</th>
        <th className="col-span-1">Category</th>
        <th className="col-span-1">Transaction date</th>
        <th className="col-span-1">Amount</th>
      </tr>
    </thead>
  );
}
export default TransactionsTableHead;
