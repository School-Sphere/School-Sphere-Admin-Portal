import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import the default styles for the resize handle
import UpcomingEvents from '../components/events/UpcomingEvents';
import EventForm from '../components/forms/EventForm';
import Header from '../components/Header';
import AlertBox from '../components/AlertBox'; // Import AlertBox
import { createEvent } from '../api/eventApi';

const Events = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [width, setWidth] = useState(300);

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
      resetForm();
      setTimeout(() => {
        navigate('/dashboard/events');
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

        <div className="flex gap-6 h-full">
          <ResizableBox
            width={300}
            height={500} // Full height
            minConstraints={[200, Infinity]} // Minimum width
            maxConstraints={[600, Infinity]} // Maximum width
            onResize={(e, { size }) => setWidth(size.width)} // Update width on resize
            axis="x" 
            resizeHandles={['e']}
            className="bg-white rounded-lg shadow-lg flex flex-col h-full"
          >
            <div className="flex-1 overflow-y-auto">
              <UpcomingEvents />
            </div>
          </ResizableBox>

          {/* Right Panel (Event Form) */}
          <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col h-full">
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