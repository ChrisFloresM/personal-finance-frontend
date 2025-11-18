import ContentCard from "./ContentCard.tsx";
import CardHeader from "./CardHeader.tsx";
import { type IPotItem } from "../pots/Pot.tsx";
import IconPot from "../../components/Icons/IconPot.tsx";
import { formatCurrency } from "../../utils/utils.ts";

/* TODO: Use this with the same data as the pots page */
const rawPots: IPotItem[] = [
  {
    id: 1,
    name: "Savings",
    target: 2000.0,
    total: 159.0,
    theme: "#277C78",
  },
  {
    id: 2,
    name: "Concert Ticket",
    target: 150.0,
    total: 110.0,
    theme: "#626070",
  },
  {
    id: 3,
    name: "Gift",
    target: 150.0,
    total: 110.0,
    theme: "#82C9D7",
  },
  {
    id: 4,
    name: "New Laptop",
    target: 1000.0,
    total: 10.0,
    theme: "#F2CDAC",
  },
  {
    id: 5,
    name: "Holiday",
    target: 1440.0,
    total: 531.0,
    theme: "#826CB0",
  },
];

function PotsOverview() {
  return (
    <ContentCard gapSize="small">
      <CardHeader btnText="See Details" navigatePath="/pots">
        Pots
      </CardHeader>
      <div className="flex flex-col gap-250 md:flex-row">
        <PotsTotal />
        <PotsStats />
      </div>
    </ContentCard>
  );
}

function PotsTotal() {
  const totalSaved = rawPots.reduce((curr, pot) => curr + pot.total, 0);

  return (
    <div className="text-green bg-beige-100 flex flex-1 items-center gap-200 rounded-[12px] p-200">
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

function PotsStats() {
  const rawDataSliced = rawPots.slice(0, 4);
  return (
    <ul className="grid flex-1 grid-cols-2 gap-200">
      {rawDataSliced.map((pot) => (
        <SinglePotStats pot={pot} key={pot.id} />
      ))}
    </ul>
  );
}

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
        className="absolute top-0 left-0 h-full w-[4px] rounded-[8px]"
        style={{ backgroundColor: theme }}
      ></div>
    </div>
  );
}

export default PotsOverview;
