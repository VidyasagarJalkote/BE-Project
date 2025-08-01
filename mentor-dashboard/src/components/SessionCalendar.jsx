import React from "react";

const sessions = [
  {
    id: 1,
    title: "Session with Alex",
    date: "Today, 10:00 AM",
    duration: "1 hour",
    type: "One-on-One"
  },
  {
    id: 2,
    title: "Group Workshop",
    date: "Tomorrow, 2:00 PM",
    duration: "2 hours",
    type: "Group"
  }
];

export default function SessionCalendar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-dark-500 mb-3">Upcoming Sessions</h3>
      <div className="space-y-3">
        {sessions.map((session) => (
          <div key={session.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-dark-500">{session.title}</h4>
                <p className="text-sm text-gray-600">{session.date}</p>
              </div>
              <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full">
                {session.type}
              </span>
            </div>
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <span>Duration: {session.duration}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full py-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors text-sm">
        View All Sessions
      </button>
    </div>
  );
}