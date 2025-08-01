import React from "react";

const mentees = [
  {
    id: 1,
    name: "Alex Johnson",
    progress: 76,
    lastSession: "2 days ago"
  },
  {
    id: 2,
    name: "Sarah Williams",
    progress: 65,
    lastSession: "1 day ago"
  }
];

export default function MenteeList() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-dark-500 mb-3">My Mentees</h3>
      <div className="space-y-3">
        {mentees.map((mentee) => (
          <div key={mentee.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                {mentee.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-dark-500">{mentee.name}</p>
                <p className="text-xs text-gray-500">Last session: {mentee.lastSession}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: `${mentee.progress}%` }}
                ></div>
              </div>
              <span className="text-xs font-medium text-dark-500">{mentee.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full py-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors text-sm">
        View All Mentees
      </button>
    </div>
  );
}