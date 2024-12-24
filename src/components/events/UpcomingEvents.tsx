import React from 'react';

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
  const events: Event[] = [
    {
      id: '1',
      title: 'Science Exhibition',
      date: 'Today',
      time: '09:15 AM',
      location: 'Room no. 23, Gargi Block'
    },
    {
      id: '2',
      title: 'Design Conference',
      date: '16 October 2024',
      time: '5:00 PM',
      location: 'Admin Hall',
      organizer: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-medium mb-4">You are going to</h2>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="flex items-center gap-4">
            {event.organizer ? (
              <img 
                src={event.organizer.avatar} 
                alt={event.organizer.name}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">SE</span>
              </div>
            )}
            <div>
              <h3 className="font-medium">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-gray-500 hover:text-gray-700">
        See More
      </button>
    </div>
  );
};

export default UpcomingEvents;