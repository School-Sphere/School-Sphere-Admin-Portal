import { useNavigate } from 'react-router-dom';
import UpcomingEvents from '../components/events/UpcomingEvents';
import EventForm from '../components/forms/EventForm';
import Header from '../components/Header';

const Events = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard/events');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
              <EventForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;