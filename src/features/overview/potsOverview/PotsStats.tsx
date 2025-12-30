import SinglePotStats from "./SinglePotStats.tsx";
import type { IPotsTotalStatsProps } from "./PotsTotal.tsx";

function PotsStats({ potsItems }: IPotsTotalStatsProps) {
  const rawDataSliced = potsItems.slice(0, 4);
  return (
    <ul className="grid flex-1 grid-cols-2 gap-200">
      {rawDataSliced.map((pot) => (
        <SinglePotStats pot={pot} key={pot.id} />
      ))}
    </ul>
  );
}

export default PotsStats;
