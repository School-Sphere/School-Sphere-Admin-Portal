import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarGrid from '../components/events/CalendarGrid';
import UpcomingEvents from '../components/events/UpcomingEvents';

const Events = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date(2024, 8)); 

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

          <button
            onClick={() => navigate('/dashboard/events/add')}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Announcement
          </button>
          
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