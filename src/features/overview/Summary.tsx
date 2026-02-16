import SummaryCard from "./SummaryCard";
import useOverview from "./useOverview.ts";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";
import ErrorMessage from "../../components/ErrorMessage.tsx";

export interface ISummaryData {
  id: number;
  label: string;
  value: number;
}

export interface IOverviewData {
  balance: number;
  income: number;
  expenses: number;
}

const summaryData: ISummaryData[] = [
  {
    id: 1,
    label: "Current Balance",
    value: 0,
  },
  {
    id: 2,
    label: "Income",
    value: 0,
  },
  {
    id: 3,
    label: "Expenses",
    value: 0,
  },
];

function Summary() {
  const { isLoading, overviewData, error } = useOverview();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage>
        Error obtaining data from the server: {error.message}
      </ErrorMessage>
    );
  }

  summaryData[0].value = overviewData?.balance ?? 0;
  summaryData[1].value = overviewData?.income ?? 0;
  summaryData[2].value = overviewData?.expenses ?? 0;

  return (
    <section className="flex flex-col gap-150 md:flex-row md:gap-300">
      {summaryData.map((data) => (
        <SummaryCard type="dark" data={data} key={data.id} />
      ))}
    </section>
  );
}

export default Summary;
