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

  const currentTitle = titles[location.pathname] || "Overview";

  return (
    <header>
      <p className="text-grey-900 text-preset-1 leading-preset-1 font-bold">
        {currentTitle}
      </p>
    </header>
  );
}

export default Header;
