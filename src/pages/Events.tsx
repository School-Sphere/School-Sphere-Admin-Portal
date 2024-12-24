import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarGrid from '../components/events/CalendarGrid';
import UpcomingEvents from '../components/events/UpcomingEvents';

const Events = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date(2024, 8)); // September 2024
  const [viewMode, setViewMode] = useState<'Month' | 'Week' | 'Day'>('Month');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">September 2024</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex rounded-lg border border-gray-200 p-1">
            {(['Month', 'Week', 'Day'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-1 rounded-md text-sm ${
                  viewMode === mode
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => navigate('/dashboard/events/add')}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr,300px] gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <CalendarGrid currentDate={currentDate} />
        </div>
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Events;