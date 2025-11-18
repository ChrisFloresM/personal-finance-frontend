import Pot, { type IPotItem } from "./Pot.tsx";

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

function PotList() {
  return (
    <ul className="grid grid-cols-1 gap-300 lg:grid-cols-2">
      {rawPots.map((pot) => (
        <Pot pot={pot} key={pot.id} />
      ))}
    </ul>
  );
}

export default PotList;
