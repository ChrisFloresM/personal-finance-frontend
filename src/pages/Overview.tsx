import Summary from "../features/overview/Summary.tsx";
import Header from "../layout/Header.tsx";
import Content from "../features/overview/Content.tsx";

function Overview() {
  return (
    <>
      <Header>
        <h1>Overview</h1>
      </Header>
      <main className="space-y-400">
        <Summary />
        <Content />
      </main>
    </>
  );
}

export default Overview;
