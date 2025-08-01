import React from "react";

export default function ProgressChart() {
  const progressData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 45 },
    { month: "Mar", value: 60 },
    { month: "Apr", value: 51 },
    { month: "May", value: 72 },
    { month: "Jun", value: 68 },
    { month: "Jul", value: 76 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-dark-500 mb-3">Progress Overview</h3>
      <div className="space-y-3">
        {progressData.map((item) => (
          <div key={item.month} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-gray-700">{item.month}</span>
              <span className="text-primary-600">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}