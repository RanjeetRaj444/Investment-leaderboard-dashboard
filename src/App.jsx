import { useState, useMemo } from "react";
import { users } from "./data/users.js";
import {
  generateLeaderboard,
  getDateOffset,
} from "./utils/portfolioCalculations.js";
import TabNavigation from "./components/TabNavigation";
import LeaderboardTab from "./components/LeaderboardTab";
import StatsOverview from "./components/StatsOverview";

function App() {
  const [activeTab, setActiveTab] = useState("daily");

  // Current date (simulated as 2025-06-28 for our data)
  const currentDate = "2025-06-28";

  // Calculate leaderboards
  const dailyPerformances = useMemo(() => {
    const previousDate = getDateOffset(currentDate, 1);
    return generateLeaderboard(users, currentDate, previousDate);
  }, [currentDate]);

  const weeklyPerformances = useMemo(() => {
    const previousDate = getDateOffset(currentDate, 7);
    return generateLeaderboard(users, currentDate, previousDate);
  }, [currentDate]);

  const monthlyPerformances = useMemo(() => {
    const previousDate = getDateOffset(currentDate, 8); // Limited by our data range
    return generateLeaderboard(users, currentDate, previousDate);
  }, [currentDate]);

  const getCurrentPerformances = () => {
    switch (activeTab) {
      case "daily":
        return dailyPerformances;
      case "weekly":
        return weeklyPerformances;
      case "monthly":
        return monthlyPerformances;
      default:
        return dailyPerformances;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case "daily":
        return "Daily Leaderboard";
      case "weekly":
        return "Weekly Leaderboard";
      case "monthly":
        return "Monthly Leaderboard";
      default:
        return "Daily Leaderboard";
    }
  };

  const getTabPeriod = () => {
    switch (activeTab) {
      case "daily":
        return "last 24 hours";
      case "weekly":
        return "last 7 days";
      case "monthly":
        return "last month";
      default:
        return "last 24 hours";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Investment Leaderboard
                </h1>
                <p className="text-gray-600">
                  Virtual Stock Trading Competition Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <StatsOverview
          dailyPerformances={dailyPerformances}
          weeklyPerformances={weeklyPerformances}
        />

        {/* Tab Navigation */}
        <div className="mb-8">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Leaderboard Content */}
        <LeaderboardTab
          title={getTabTitle()}
          performances={getCurrentPerformances()}
          period={getTabPeriod()}
        />
      </div>

      {/* Footer */}
      <div className="mt-16 bg-white/50 backdrop-blur-sm border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Investment Leaderboard Dashboard • Virtual Trading Competition •
              Real-time Performance Tracking
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Simulated data for demonstration purposes • No real money involved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
