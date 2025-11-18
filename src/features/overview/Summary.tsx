import SummaryCard from "./SummaryCard";

export interface ISummaryData {
  id: number;
  label: string;
  value: number;
}

const summaryData: ISummaryData[] = [
  {
    id: 1,
    label: "Current Balance",
    value: 4836
  },
  {
    id: 2,
    label: "Income",
    value: 3814.25
  },
  {
    id: 3,
    label: "Expenses",
    value: 1700.50
  }
];

function Summary() {
  return (
    <section className="flex flex-col md:flex-row gap-150 md:gap-300">
      {
        summaryData.map(data => <SummaryCard type="dark" data={data} key={data.id} />)
      }
    </section>
  );
}



export default Summary;