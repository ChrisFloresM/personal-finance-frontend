import AppLayout from "./layout/AppLayout.tsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Overview />} handle={{ title: "Overview" }} />
        <Route
          path="/transactions"
          element={<Transactions />}
          handle={{ title: "Transactions" }}
        />
        <Route
          path="/budgets"
          element={<Budgets />}
          handle={{ title: "Budgets" }}
        />
        <Route path="/pots" element={<Pots />} handle={{ title: "Pots" }} />
        <Route
          path="/recurring-bills"
          element={<RecurringBills />}
          handle={{ title: "Recurring" + " Bills" }}
        />
      </Route>
    </Routes>
  );
}

function Overview() {
  return (
    <div className="inline-flex w-auto outline-4 outline-amber-500">
      <p className="w-[500px] outline-1 outline-cyan-950">Some text</p>
    </div>
  );
}

function Transactions() {
  return <div>Transactions</div>;
}

function Budgets() {
  return <div>Budgets</div>;
}

function Pots() {
  return <div>Pots</div>;
}

function RecurringBills() {
  return <div>Recurring bills</div>;
}

export default App;
