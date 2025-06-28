import { getStockPrice } from "../data/stockPrices.js";

export const calculatePortfolioValue = (user, date) => {
  const stockValue = user.holdings.reduce((total, holding) => {
    const currentPrice = getStockPrice(holding.symbol, date);
    return total + holding.quantity * currentPrice;
  }, 0);

  // Assume remaining cash after stock purchases
  const investedAmount = user.holdings.reduce((total, holding) => {
    return total + holding.quantity * holding.buyPrice;
  }, 0);

  const remainingCash = user.initialCash - investedAmount;
  return stockValue + remainingCash;
};

export const generateLeaderboard = (users, currentDate, previousDate) => {
  const performances = users.map((user) => {
    const currentValue = calculatePortfolioValue(user, currentDate);
    const previousValue = calculatePortfolioValue(user, previousDate);
    const change = currentValue - previousValue;
    const changePercent =
      previousValue > 0 ? (change / previousValue) * 100 : 0;

    return {
      userId: user.id,
      userName: user.name,
      avatar: user.avatar,
      currentValue,
      previousValue,
      change,
      changePercent,
      rank: 0, // Will be set after sorting
    };
  });

  // Sort by change percentage (descending)
  performances.sort((a, b) => b.changePercent - a.changePercent);

  // Assign ranks
  performances.forEach((performance, index) => {
    performance.rank = index + 1;
  });

  return performances;
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatPercentage = (percent) => {
  const sign = percent >= 0 ? "+" : "";
  return `${sign}${percent.toFixed(2)}%`;
};

export const getDateOffset = (date, daysOffset) => {
  const targetDate = new Date(date);
  targetDate.setDate(targetDate.getDate() - daysOffset);
  return targetDate.toISOString().split("T")[0];
};
