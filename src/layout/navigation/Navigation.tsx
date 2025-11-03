import NavigationItem from "./NavigationItem.tsx";
import IconNavOverview from "../../components/Icons/IconNavOverview.tsx";
import IconNavTransactions from "../../components/Icons/IconNavTransactions.tsx";
import IconNavBudgets from "../../components/Icons/IconNavBudgets.tsx";
import IconNavPots from "../../components/Icons/IconNavPots.tsx";
import IconNavBills from "../../components/Icons/IconNavBills.tsx";

function Navigation() {
  return (
    <nav className="flex bg-red-500">
      <NavigationItem text="Overview">
        <IconNavOverview size={24} />
      </NavigationItem>
      <NavigationItem text="Transactions">
        <IconNavTransactions size={24} />
      </NavigationItem>
      <NavigationItem text="Budgets">
        <IconNavBudgets size={24} />
      </NavigationItem>
      <NavigationItem text="Pots">
        <IconNavPots size={24} />
      </NavigationItem>
      <NavigationItem text="Recurring bills">
        <IconNavBills size={24} />
      </NavigationItem>
    </nav>
  );
}

export default Navigation;
