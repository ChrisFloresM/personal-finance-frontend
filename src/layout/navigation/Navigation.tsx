import NavigationItem from "./NavigationItem.tsx";
import IconNavOverview from "../../components/Icons/IconNavOverview.tsx";
import IconNavTransactions from "../../components/Icons/IconNavTransactions.tsx";
import IconNavBudgets from "../../components/Icons/IconNavBudgets.tsx";
import IconNavPots from "../../components/Icons/IconNavPots.tsx";
import IconNavBills from "../../components/Icons/IconNavBills.tsx";

interface INavigationProps {
  isCollapsed: boolean;
}

function Navigation({ isCollapsed }: INavigationProps) {
  return (
    <nav
      id="nav-menu"
      className={`flex flex-1 md:justify-between lg:flex-col lg:justify-start ${isCollapsed ? "lg:pr-100" : "lg:pr-300"} `}
    >
      <NavigationItem text="Overview" to="/overview" isCollapsed={isCollapsed}>
        <IconNavOverview size={24} />
      </NavigationItem>

      <NavigationItem
        text="Transactions"
        to="/transactions"
        isCollapsed={isCollapsed}
      >
        <IconNavTransactions size={24} />
      </NavigationItem>

      <NavigationItem text="Budgets" to="/budgets" isCollapsed={isCollapsed}>
        <IconNavBudgets size={24} />
      </NavigationItem>

      <NavigationItem text="Pots" to="/pots" isCollapsed={isCollapsed}>
        <IconNavPots size={24} />
      </NavigationItem>

      <NavigationItem
        text="Recurring bills"
        to="/recurring-bills"
        isCollapsed={isCollapsed}
      >
        <IconNavBills size={24} />
      </NavigationItem>
    </nav>
  );
}

export default Navigation;
