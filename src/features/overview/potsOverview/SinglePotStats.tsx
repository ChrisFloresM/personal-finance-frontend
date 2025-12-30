import type { IPotItem } from "../../pots/Pot.tsx";
import { formatCurrency } from "../../../utils/utils.ts";

interface ISinglePotStatsProps {
  pot: IPotItem;
}

function SinglePotStats({ pot }: ISinglePotStatsProps) {
  const { name, total, theme } = pot;

  return (
    <div className="relative pl-250">
      <dl className="space-y-50">
        <dt className="text-preset-5 leading-preset-5 text-grey-500">{name}</dt>
        <dd className="text-preset-4 leading-preset-4 text-grey-900 font-bold">
          {formatCurrency(total)}
        </dd>
      </dl>
      <div
        className="absolute top-0 left-0 h-full w-[4px] rounded-lg"
        style={{ backgroundColor: theme }}
      ></div>
    </div>
  );
}

export default SinglePotStats;
