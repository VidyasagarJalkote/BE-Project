import React from "react";

export default function DashboardCard({ title, value, icon, trend, trendValue }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <h2 className="text-2xl font-bold text-dark-500 mt-1">{value}</h2>
          {trend && (
            <div className={`flex items-center mt-1 text-xs ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}
              <span className="ml-1 text-gray-500">vs last week</span>
            </div>
          )}
        </div>
        <div className="bg-primary-100 p-2 rounded-lg text-primary-600 text-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}