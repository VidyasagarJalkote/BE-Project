import React from "react";
import DashboardCard from "../components/DashboardCard";
import MenteeList from "../components/MenteeList";
import SessionCalendar from "../components/SessionCalendar";
import ProgressChart from "../components/ProgressChart";
import { FaUsers, FaCalendarAlt, FaComments, FaChartLine } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-dark-500">Welcome back, Dr. Smith</h2>
        <p className="text-sm text-gray-600">Here's your mentor dashboard overview</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <DashboardCard 
          title="Active Mentees" 
          value="8" 
          icon={<FaUsers />} 
          trend="up" 
          trendValue="2" 
        />
        <DashboardCard 
          title="Scheduled Sessions" 
          value="5" 
          icon={<FaCalendarAlt />} 
        />
        <DashboardCard 
          title="Unread Messages" 
          value="12" 
          icon={<FaComments />} 
          trend="up" 
          trendValue="5" 
        />
        <DashboardCard 
          title="Average Progress" 
          value="72%" 
          icon={<FaChartLine />} 
          trend="up" 
          trendValue="3%" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2">
          <SessionCalendar />
        </div>
        <div>
          <MenteeList />
        </div>
      </div>

      <div>
        <ProgressChart />
      </div>
    </div>
  );
}