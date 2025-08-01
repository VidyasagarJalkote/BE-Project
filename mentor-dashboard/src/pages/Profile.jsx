import React from "react";

export default function Profile() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-dark-500 mb-6">Your Profile</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-700">Name</h3>
          <p className="text-dark-500">Alex Johnson</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-700">Email</h3>
          <p className="text-dark-500">alex.johnson@example.com</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-700">Mentor</h3>
          <p className="text-dark-500">Sarah Williams</p>
        </div>
      </div>
    </div>
  );
}