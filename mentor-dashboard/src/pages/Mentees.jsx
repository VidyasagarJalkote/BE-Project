import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample mentee data
const menteesData = [
  {
    id: 1,
    name: "Alex Johnson",
    college: "Stanford University",
    department: "Computer Science",
    skills: ["React", "Node.js", "Python"],
    interests: ["Web Development", "AI", "Cybersecurity"],
    email: "alex.johnson@stanford.edu",
    progress: 76,
    avatar: "/assets/images/avatar1.jpg"
  },
  {
    id: 2,
    name: "Sarah Williams",
    college: "MIT",
    department: "Electrical Engineering",
    skills: ["Embedded Systems", "C++", "MATLAB"],
    interests: ["Robotics", "IoT", "Renewable Energy"],
    email: "sarah.williams@mit.edu",
    progress: 65,
    avatar: "/assets/images/avatar2.jpg"
  }
];

export default function Mentees() {
  const { menteeId } = useParams();
  const [selectedMentee, setSelectedMentee] = useState(null);

  // If menteeId exists in URL, find that mentee
  React.useEffect(() => {
    if (menteeId) {
      const mentee = menteesData.find(m => m.id === parseInt(menteeId));
      setSelectedMentee(mentee);
    }
  }, [menteeId]);

  if (selectedMentee) {
    return <MenteeProfile mentee={selectedMentee} />;
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-dark-500">My Mentees</h2>
        <p className="text-gray-600">Select a mentee to view details</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menteesData.map(mentee => (
          <MenteeCard 
            key={mentee.id} 
            mentee={mentee} 
            onClick={() => setSelectedMentee(mentee)}
          />
        ))}
      </div>
    </div>
  );
}

function MenteeCard({ mentee, onClick }) {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <img 
          src={mentee.avatar} 
          alt={mentee.name} 
          className="h-12 w-12 rounded-full border-2 border-primary-200"
        />
        <div>
          <h3 className="font-medium text-dark-500">{mentee.name}</h3>
          <p className="text-sm text-gray-600">{mentee.college}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {mentee.skills.slice(0, 3).map(skill => (
              <span key={skill} className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MenteeProfile({ mentee }) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-dark-500">{mentee.name}'s Profile</h2>
          <p className="text-gray-600">Detailed information about your mentee</p>
        </div>
        <div className="w-24 h-24 rounded-full border-4 border-primary-200 overflow-hidden">
          <img src={mentee.avatar} alt={mentee.name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-dark-500 mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">College</p>
              <p className="font-medium">{mentee.college}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="font-medium">{mentee.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{mentee.email}</p>
            </div>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-dark-500 mb-4">Skills & Interests</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {mentee.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Interests</p>
              <div className="flex flex-wrap gap-2">
                {mentee.interests.map(interest => (
                  <span key={interest} className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-dark-500 mb-4">Progress Overview</h3>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="flex justify-between text-sm mb-1">
                <span>Overall Progress</span>
                <span className="font-medium">{mentee.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary-600 h-2.5 rounded-full" 
                  style={{ width: `${mentee.progress}%` }}
                ></div>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              View Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}