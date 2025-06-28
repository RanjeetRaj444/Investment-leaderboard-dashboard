export const stockPrices = [
  // AAPL prices
  { symbol: "AAPL", date: "2025-06-20", price: 175.5 },
  { symbol: "AAPL", date: "2025-06-21", price: 178.25 },
  { symbol: "AAPL", date: "2025-06-22", price: 176.8 },
  { symbol: "AAPL", date: "2025-06-23", price: 180.4 },
  { symbol: "AAPL", date: "2025-06-24", price: 182.15 },
  { symbol: "AAPL", date: "2025-06-25", price: 179.9 },
  { symbol: "AAPL", date: "2025-06-26", price: 183.75 },
  { symbol: "AAPL", date: "2025-06-27", price: 185.2 },
  { symbol: "AAPL", date: "2025-06-28", price: 187.6 },

  // GOOGL prices
  { symbol: "GOOGL", date: "2025-06-20", price: 142.3 },
  { symbol: "GOOGL", date: "2025-06-21", price: 145.8 },
  { symbol: "GOOGL", date: "2025-06-22", price: 144.2 },
  { symbol: "GOOGL", date: "2025-06-23", price: 147.6 },
  { symbol: "GOOGL", date: "2025-06-24", price: 149.85 },
  { symbol: "GOOGL", date: "2025-06-25", price: 151.4 },
  { symbol: "GOOGL", date: "2025-06-26", price: 148.9 },
  { symbol: "GOOGL", date: "2025-06-27", price: 152.75 },
  { symbol: "GOOGL", date: "2025-06-28", price: 155.2 },

  // TSLA prices
  { symbol: "TSLA", date: "2025-06-20", price: 248.75 },
  { symbol: "TSLA", date: "2025-06-21", price: 245.3 },
  { symbol: "TSLA", date: "2025-06-22", price: 252.9 },
  { symbol: "TSLA", date: "2025-06-23", price: 256.4 },
  { symbol: "TSLA", date: "2025-06-24", price: 251.8 },
  { symbol: "TSLA", date: "2025-06-25", price: 259.15 },
  { symbol: "TSLA", date: "2025-06-26", price: 262.75 },
  { symbol: "TSLA", date: "2025-06-27", price: 258.6 },
  { symbol: "TSLA", date: "2025-06-28", price: 264.9 },

  // AMZN prices
  { symbol: "AMZN", date: "2025-06-20", price: 186.4 },
  { symbol: "AMZN", date: "2025-06-21", price: 189.75 },
  { symbol: "AMZN", date: "2025-06-22", price: 192.3 },
  { symbol: "AMZN", date: "2025-06-23", price: 188.9 },
  { symbol: "AMZN", date: "2025-06-24", price: 194.6 },
  { symbol: "AMZN", date: "2025-06-25", price: 197.85 },
  { symbol: "AMZN", date: "2025-06-26", price: 195.2 },
  { symbol: "AMZN", date: "2025-06-27", price: 199.4 },
  { symbol: "AMZN", date: "2025-06-28", price: 202.15 },

  // MSFT prices
  { symbol: "MSFT", date: "2025-06-20", price: 425.2 },
  { symbol: "MSFT", date: "2025-06-21", price: 428.9 },
  { symbol: "MSFT", date: "2025-06-22", price: 432.45 },
  { symbol: "MSFT", date: "2025-06-23", price: 429.8 },
  { symbol: "MSFT", date: "2025-06-24", price: 435.6 },
  { symbol: "MSFT", date: "2025-06-25", price: 438.25 },
  { symbol: "MSFT", date: "2025-06-26", price: 441.9 },
  { symbol: "MSFT", date: "2025-06-27", price: 444.75 },
  { symbol: "MSFT", date: "2025-06-28", price: 447.3 },
];

export const getStockPrice = (symbol, date) => {
  const price = stockPrices.find((p) => p.symbol === symbol && p.date === date);
  return price?.price || 0;
};
