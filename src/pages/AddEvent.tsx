import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '../components/forms/EventForm';

const AddEvent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard/events');
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Add New Event</h1>
        <EventForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddEvent;