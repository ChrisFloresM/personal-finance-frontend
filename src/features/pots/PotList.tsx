import Pot, { type IPotItem } from "./Pot.tsx";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";
import ErrorMessage from "../../components/ErrorMessage.tsx";

interface IPotListProps {
  isLoading: boolean;
  pots: IPotItem[];
  error: Error | null;
}

function PotList({ isLoading, pots, error }: IPotListProps) {
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

  if (!pots || !pots.length) {
    return <ErrorMessage>You have no pots registered yet!</ErrorMessage>;
  }

  return (
    <ul className="grid grid-cols-1 gap-300 lg:grid-cols-2">
      {pots.map((pot) => (
        <Pot pot={pot} key={pot.id} />
      ))}
    </ul>
  );
}

export default PotList;
