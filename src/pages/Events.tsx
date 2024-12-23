import React from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import EventCard from '../components/events/EventCard';

const Events = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">September 2024</h1>
          <div className="flex items-center gap-2 mt-1">
            <CalendarIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">Calendar View</span>
          </div>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Add New Event
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-6">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square flex items-center justify-center text-sm border rounded-md
              ${i === 8 ? 'bg-indigo-100 border-indigo-200 text-indigo-600' : 'border-gray-100 hover:bg-gray-50'}
            `}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          <EventCard
            title="Science Exhibition"
            date="Today"
            time="09:15 AM"
            location="Room no. 23, Gargi Block"
          />
          <EventCard
            title="Design Conference"
            date="16 October 2024"
            time="5:00 PM"
            location="Kalam Block"
            organizer={{
              name: "John Doe",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;