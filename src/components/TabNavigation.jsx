import { Calendar, Clock, TrendingUp } from "lucide-react";

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "daily", label: "Daily", icon: Clock },
    { id: "weekly", label: "Weekly", icon: Calendar },
    { id: "monthly", label: "Monthly", icon: TrendingUp },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-2 p-1 bg-gray-100 rounded-xl">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 ${
            activeTab === id
              ? "bg-white text-blue-600 shadow-md transform scale-105"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
