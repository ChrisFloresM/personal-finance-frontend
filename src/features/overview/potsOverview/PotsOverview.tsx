import ContentCard from "../ContentCard.tsx";
import CardHeaderWithLink from "../../../components/CardHeaderWithLink.tsx";
import { type IPotItem } from "../../pots/Pot.tsx";
import PotsTotal from "./PotsTotal.tsx";
import PotsStats from "./PotsStats.tsx";

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
      <CardHeaderWithLink btnText="See Details" navigatePath="/pots">
        Pots
      </CardHeaderWithLink>
      <div className="flex flex-col gap-250 md:flex-row">
        <PotsTotal potsItems={rawPots} />
        <PotsStats potsItems={rawPots} />
      </div>
    </ContentCard>
  );
}

export default PotsOverview;
