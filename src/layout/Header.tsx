import { useLocation } from "react-router";
function Header() {
  const location = useLocation();

  const titles: Record<string, string> = {
    "/": "Overview",
    "/transactions": "Transactions",
    "/budgets": "Budgets",
    "/pots": "Pots",
    "/recurring-bills": "Recurring Bills",
  } as const;

  const currentTitle = titles[location.pathname] || "overview";

  return (
    <header>
      <p>{currentTitle}</p>
    </header>
  );
}

export default Header;
