import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface EventFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg p-6 space-y-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Event</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title of Event
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description of Event
        </label>
        <textarea
          rows={4}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md pl-10"
            />
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <div className="relative">
            <input
              type="time"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md pl-10"
            />
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Place
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add Event
        </button>
      </div>
    </form>
  );
};

export default EventForm;