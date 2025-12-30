import IconPot from "../../../components/Icons/IconPot.tsx";
import { formatCurrency } from "../../../utils/utils.ts";
import type { IPotItem } from "../../pots/Pot.tsx";

export interface IPotsTotalStatsProps {
  potsItems: IPotItem[];
}

function PotsTotal({ potsItems }: IPotsTotalStatsProps) {
  const totalSaved = potsItems.reduce((curr, pot) => curr + pot.total, 0);

  return (
    <div className="text-green bg-beige-100 flex flex-1 items-center gap-200 rounded-xl p-200">
      <IconPot size={40} />
      <dl className="space-y-[11px]">
        <dt className="text-grey-500 text-preset-4 leading-preset-4">
          Total Saved
        </dt>
        <dd className="text-grey-900 text-preset-1 leading-preset-1 font-bold">
          {formatCurrency(totalSaved)}
        </dd>
      </dl>
    </div>
  );
}

export default PotsTotal;
