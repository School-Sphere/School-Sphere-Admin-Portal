import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface EventFormProps {
  onSubmit: (
    e: React.FormEvent,
    formData: any,
    resetForm: () => void
  ) => void;
  loading: boolean;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      venue: '',
    });
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e, formData, resetForm)}
      className="bg-white rounded-lg p-6 space-y-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Event</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title of Event
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description of Event
        </label>
        <textarea
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleInputChange}
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
              name="date"
              value={formData.date}
              onChange={handleInputChange}
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
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md pl-10"
            />
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Venue
        </label>
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 text-white rounded-md ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {loading ? 'Adding...' : 'Add Event'}
        </button>
      </div>
    </form>
  );
};

export default EventForm;