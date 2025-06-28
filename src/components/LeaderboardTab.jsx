import React from "react";
import LeaderboardCard from "./LeaderboardCard";

const LeaderboardTab = ({ title, performances, period }) => {
  const topPerformer = performances[0];
  const averageChange =
    performances.reduce((sum, p) => sum + p.changePercent, 0) /
    performances.length;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">Performance over the {period}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0">
            <div className="text-center">
              <p className="text-sm text-gray-500">Top Performer</p>
              <p className="text-lg font-bold text-blue-600">
                {topPerformer?.userName || "N/A"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Average Change</p>
              <p
                className={`text-lg font-bold ${
                  averageChange >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {averageChange >= 0 ? "+" : ""}
                {averageChange.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {performances.map((performance, index) => (
          <LeaderboardCard
            key={performance.userId}
            performance={performance}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTab;
