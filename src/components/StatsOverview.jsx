import { formatCurrency } from "../utils/portfolioCalculations.js";

const StatsOverview = ({ dailyPerformances, weeklyPerformances }) => {
  const totalInvestors = dailyPerformances.length;
  const totalPortfolioValue = dailyPerformances.reduce(
    (sum, p) => sum + p.currentValue,
    0
  );
  const dailyWinner = dailyPerformances[0];
  const weeklyWinner = weeklyPerformances[0];

  const stats = [
    {
      label: "Total Investors",
      value: totalInvestors.toString(),
      color: "blue",
    },
    {
      label: "Total Portfolio Value",
      value: formatCurrency(totalPortfolioValue),
      color: "green",
    },
    {
      label: "Daily Top Performer",
      value: `${dailyWinner?.userName || "N/A"} (${
        dailyWinner ? `+${dailyWinner.changePercent.toFixed(1)}%` : "0%"
      })`,
      color: "purple",
    },
    {
      label: "Weekly Champion",
      value: `${weeklyWinner?.userName || "N/A"} (${
        weeklyWinner ? `+${weeklyWinner.changePercent.toFixed(1)}%` : "0%"
      })`,
      color: "yellow",
    },
  ];

  const colorMap = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ${
            colorMap[stat.color]
          }`}
        >
          <p className="text-sm font-medium opacity-80 mb-1">{stat.label}</p>
          <p className="text-lg font-bold truncate" title={stat.value}>
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
