import React, { useEffect, useState } from 'react';
import { fetchEvents } from "../../api/eventApi";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer?: {
    name: string;
    avatar: string;
  };
}

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadEvents = async (page: number) => {
    try {
      setLoading(true);
      setErrorMessage(''); // Reset error message

      const response = await fetchEvents(page);
      setEvents(response.data.docs); // Save events to state
      setTotalPages(response.data.totalPages); // Save total pages to state
    } catch (error: any) {
      console.error('Error fetching events:', error);
      setErrorMessage(error.response?.data?.message || 'Error fetching events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents(page);
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 w-80 flex flex-col h-full">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-10 pb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>

        {errorMessage && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {errorMessage}
          </div>
        )}
      </div>

      {/* Scrollable Events List */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="space-y-6">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start space-x-4 border-b border-gray-200 pb-4 last:border-b-0"
                >
                  {event.organizer ? (
                    <img
                      src={event.organizer.avatar}
                      alt={event.organizer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm font-medium">SE</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>No events found.</div>
            )}
          </div>
        )}
      </div>

      {/* Sticky Pagination Buttons */}
      <div className="sticky bottom-0 bg-white z-10 pt-4">
        <div className="flex justify-between">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">Page {page} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;