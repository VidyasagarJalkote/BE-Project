import React from "react";

export default function Messages() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-dark-500">Messages</h2>
        <p className="text-gray-600">Communicate with your mentees</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <p>Messages content will go here</p>
      </div>
    </div>
  );
}