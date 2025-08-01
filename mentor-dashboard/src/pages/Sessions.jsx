import React from "react";
import SessionCalendar from "../components/SessionCalendar";

export default function Sessions() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-dark-500">Sessions</h2>
        <p className="text-gray-600">View and manage your mentoring sessions</p>
      </div>
      <SessionCalendar />
    </div>
  );
}