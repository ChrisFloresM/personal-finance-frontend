import ContentCard from "../ContentCard.tsx";
import CardHeaderWithLink from "../../../components/CardHeaderWithLink.tsx";
import PotsTotal from "./PotsTotal.tsx";
import PotsStats from "./PotsStats.tsx";
import usePots from "../../pots/usePots.ts";
import LoadingSpinner from "../../../components/LoadingSpinner.tsx";
import ErrorMessage from "../../../components/ErrorMessage.tsx";

function PotsOverview() {
  const { isLoading, pots, error } = usePots();

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

  return (
    <ContentCard gapSize="small">
      <CardHeaderWithLink btnText="See Details" navigatePath="/pots">
        Pots
      </CardHeaderWithLink>
      {pots === undefined || pots.length === 0 ? (
        <p className="text-preset-4 leading-preset-4 text-grey-500 text-center">
          You have no pots yet
        </p>
      ) : (
        <div className="flex flex-col gap-250 md:flex-row">
          <PotsTotal potsItems={pots} />
          <PotsStats potsItems={pots} />
        </div>
      )}
    </ContentCard>
  );
}

export default PotsOverview;
