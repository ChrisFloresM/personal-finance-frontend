import { Cell, Pie, PieChart } from "recharts";

interface ISpendingChartProps {
  isAnimationActive?: boolean;
}

interface IBudgetItem extends Record<string, unknown> {
  id: number;
  category: string;
  maximum: number;
  spent: number;
  theme: string;
}

const budgetItems: IBudgetItem[] = [
  {
    id: 1,
    category: "Entertainment",
    maximum: 50,
    spent: 15,
    theme: "#277C68",
  },
  {
    id: 2,
    category: "Bills",
    maximum: 750,
    spent: 150,
    theme: "#82C9D7",
  },
  {
    id: 3,
    category: "Dinning Out",
    maximum: 75,
    spent: 133.75,
    theme: "#F2CDAC",
  },
  {
    id: 4,
    category: "Personal Care",
    maximum: 100,
    spent: 40,
    theme: "#626070",
  },
];

function SpendingChart({ isAnimationActive = true }: ISpendingChartProps) {
  const totalSpent = budgetItems.reduce((tot, budget) => tot + budget.spent, 0);
  const totalMaxiumum = budgetItems.reduce(
    (tot, budget) => tot + budget.maximum,
    0,
  );

  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "364px",
        maxHeight: "80vh",
        aspectRatio: 1,
        outline: "1px solid red",
      }}
      responsive
    >
      <Pie
        data={budgetItems}
        dataKey="spent"
        nameKey="category"
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
        dataKey="spent"
        nameKey="category"
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
          fontSize="32"
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
