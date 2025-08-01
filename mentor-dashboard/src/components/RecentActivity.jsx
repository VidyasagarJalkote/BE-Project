import React from "react";
import { FaCheckCircle, FaBook, FaVideo, FaTasks } from "react-icons/fa";

const activities = [
  {
    id: 1,
    type: "lesson",
    title: "Completed React Fundamentals",
    time: "2 hours ago",
    icon: <FaBook className="text-primary-600" />,
  },
  {
    id: 2,
    type: "video",
    title: "Watched State Management",
    time: "Yesterday",
    icon: <FaVideo className="text-blue-500" />,
  },
  {
    id: 3,
    type: "task",
    title: "Submitted Project Proposal",
    time: "2 days ago",
    icon: <FaTasks className="text-green-500" />,
  },
  {
    id: 4,
    type: "lesson",
    title: "Completed Advanced Hooks",
    time: "3 days ago",
    icon: <FaBook className="text-primary-600" />,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-dark-500 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="mt-1">{activity.icon}</div>
            <div>
              <p className="font-medium text-dark-500">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}