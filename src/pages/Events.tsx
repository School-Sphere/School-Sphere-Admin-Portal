import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UpcomingEvents from '../components/events/UpcomingEvents';
import EventForm from '../components/forms/EventForm';
import Header from '../components/Header';
import AlertBox from '../components/AlertBox'; // Import AlertBox
import { createEvent } from '../api/eventApi';

const Events = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent, formData: any, resetForm: () => void) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    try {
      const combinedDateTime = new Date(`${formData.date}T${formData.time}`);
      const dateOnly = new Date(formData.date);

      if (isNaN(combinedDateTime.getTime()) || isNaN(dateOnly.getTime())) {
        throw new Error('Invalid date or time format');
      }

      await createEvent({
        title: formData.title,
        description: formData.description,
        time: combinedDateTime.toISOString(),
        date: dateOnly.toISOString(),
        venue: formData.venue,
      });

      setAlert({ message: 'Event created successfully!', type: 'success' });
      resetForm(); // Clear the form data
      setTimeout(() => {
        navigate('/dashboard/events'); // Redirect after success
      }, 2000);
    } catch (err: any) {
      setAlert({ message: err.message || 'Failed to create event.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header />
      {/* Alert Box */}
      {alert && <AlertBox message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Events</h1>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 h-full">
          <div className="col-span-1 bg-white rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <UpcomingEvents />
            </div>
          </div>

          <div className="col-span-3 bg-white rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <EventForm
                onSubmit={(e, formData, resetForm) => handleSubmit(e, formData, resetForm)}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;