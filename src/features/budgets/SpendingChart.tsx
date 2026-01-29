import { Cell, Pie, PieChart } from "recharts";
import type { IBudgetItem } from "../../pages/Budgets.tsx";

interface ISpendingChartProps {
  isAnimationActive?: boolean;
  budgetItems: IBudgetItem[];
}

function SpendingChart({
  isAnimationActive = true,
  budgetItems,
}: ISpendingChartProps) {
  const totalSpent = budgetItems.reduce(
    (tot, budget) => tot + budget.totalSpent,
    0,
  );
  const totalMaxiumum = budgetItems.reduce(
    (tot, budget) => tot + budget.budgetAmount,
    0,
  );

  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "370px",
        height: "280px",
        margin: "auto",
      }}
      responsive
    >
      <Pie
        data={budgetItems}
        dataKey="totalSpent"
        nameKey={(entry: IBudgetItem) => entry.category.key}
        outerRadius="65%"
        innerRadius="55%"
        stroke="none"
        isAnimationActive={isAnimationActive}
      >
        {budgetItems.map((budget) => (
          <Cell fill={budget.theme} fillOpacity="0.7" key={budget.id} />
        ))}
      </Pie>
      <Pie
        data={budgetItems}
        dataKey="totalSpent"
        nameKey={(entry: IBudgetItem) => entry.category.key}
        innerRadius="65%"
        stroke="none"
        isAnimationActive={isAnimationActive}
      >
        {budgetItems.map((budget) => (
          <Cell fill={budget.theme} key={budget.id} />
        ))}
        <text
          x="50%"
          y="48%"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#201F24"
        >
          ${totalSpent.toFixed(2)}
        </text>

        <text x="50%" y="56%" textAnchor="middle" fontSize="12" fill="#696868">
          of ${totalMaxiumum.toFixed(2)} limit
        </text>
      </Pie>
    </PieChart>
  );
}

export default SpendingChart;
