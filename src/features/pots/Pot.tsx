import PotHeading from "./PotHeading.tsx";
import PotStats from "./PotStats.tsx";
import PotActions from "./PotActions.tsx";

export interface IPotItem {
  id: number;
  name: string;
  target: number;
  total: number;
  theme: string;
}

interface IPotProps {
  pot: IPotItem;
}

function Pot({ pot }: IPotProps) {
  const { name, target, total, theme } = pot;

  return (
    <li className="col-span-1 row-span-1 flex flex-col gap-300 rounded-xl bg-[#d6d3d1] px-250 py-300">
      <PotHeading name={name} theme={theme} />
      <PotStats target={target} total={total} theme={theme} />
      <PotActions />
    </li>
  );
}

export default Pot;
