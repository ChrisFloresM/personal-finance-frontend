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
  const { id, name, target, total, theme } = pot;

  return (
    <li className="col-span-1 row-span-1 flex flex-col gap-300 rounded-xl bg-[#d6d3d1] px-250 py-300 duration-200">
      <PotHeading name={name} theme={theme} pot={pot} />
      <PotStats target={target} total={total} theme={theme} />
      <PotActions potData={pot} />
    </li>
  );
}

export default Pot;
