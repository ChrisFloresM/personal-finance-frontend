import { ProtectedLayout } from "./layout/AppLayout.tsx";
import { Navigate, Route, Routes } from "react-router";
import Overview from "./pages/Overview.tsx";
import UserTransactions from "./pages/UserTransactions.tsx";
import Budgets from "./pages/Budgets.tsx";
import Pots from "./pages/Pots.tsx";
import RecurringBills from "./pages/RecurringBills.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LogIn from "./pages/LogIn.tsx";
import PublicLayout from "./layout/PublicLayout.tsx";
import AuthCallback from "./features/auth/AuthCallback.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LogIn />} />
          <Route path="callback" element={<AuthCallback />} />
        </Route>

        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Navigate to="overview" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="transactions" element={<UserTransactions />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="pots" element={<Pots />} />
          <Route path="recurring-bills" element={<RecurringBills />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
