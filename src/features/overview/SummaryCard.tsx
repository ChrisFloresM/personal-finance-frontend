import { formatCurrency } from "../../utils/utils.ts";
import type { ISummaryData } from "./Summary.tsx";

interface ISummaryCardProps {
  type: "dark" | "light";
  data: ISummaryData;
}

function SummaryCard({ data }: ISummaryCardProps) {
  const { label, value } = data;

  return (
    <div className="first:bg-grey-900 text-grey-500 flex-1 rounded-[12px] bg-white p-250 first:text-white">
      <dl className="flex flex-col gap-150">
        <dt className="text-preset-4 leading-preset-4">{label}</dt>
        <dd className="text-preset-1 leading-preset-4 font-bold">
          {formatCurrency(value)}
        </dd>
      </dl>
    </div>
  );
}

export default SummaryCard;
