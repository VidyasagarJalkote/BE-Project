import React from "react";
import MenteeList from "../components/MenteeList";

export default function Mentees() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-dark-500">My Mentees</h2>
        <p className="text-gray-600">Manage and track your mentees' progress</p>
      </div>
      <MenteeList />
    </div>
  );
}