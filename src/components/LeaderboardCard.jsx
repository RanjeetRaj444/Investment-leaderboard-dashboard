import React from "react";
import { Trophy, TrendingUp, TrendingDown } from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
} from "../utils/portfolioCalculations.js";

const LeaderboardCard = ({ performance, index }) => {
  const isPositive = performance.changePercent >= 0;
  const rankColors = ["text-yellow-500", "text-gray-400", "text-amber-600"];
  const rankColor = index < 3 ? rankColors[index] : "text-gray-500";

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/50 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              index === 0
                ? "bg-yellow-100"
                : index === 1
                ? "bg-gray-100"
                : index === 2
                ? "bg-amber-100"
                : "bg-gray-50"
            }`}
          >
            {index < 3 ? (
              <Trophy className={`w-4 h-4 ${rankColor}`} />
            ) : (
              <span className={`text-sm font-bold ${rankColor}`}>
                {performance.rank}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <img
              src={performance.avatar}
              alt={performance.userName}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-gray-300 transition-all duration-300"
            />
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                {performance.userName}
              </h3>
              <p className="text-sm text-gray-500">Portfolio Value</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {formatPercentage(performance.changePercent)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Current Value</p>
          <p className="text-lg font-bold text-gray-900">
            {formatCurrency(performance.currentValue)}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Change</p>
          <p
            className={`text-lg font-bold ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {performance.change >= 0 ? "+" : ""}
            {formatCurrency(performance.change)}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Performance</span>
          <span>{Math.abs(performance.changePercent).toFixed(2)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isPositive
                ? "bg-gradient-to-r from-green-400 to-green-600"
                : "bg-gradient-to-r from-red-400 to-red-600"
            }`}
            style={{
              width: `${Math.min(
                Math.abs(performance.changePercent) * 10,
                100
              )}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
