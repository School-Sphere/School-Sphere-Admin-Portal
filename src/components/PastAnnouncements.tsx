import React from 'react';

interface Event {
  id: string;
  title: string;
  organizer?: {
    name: string;
    avatar: string;
  };
}

const PastAnnouncements: React.FC = () => {
  const events: Event[] = [
    {
      id: '1',
      title: 'Science Exhibition',
    },
    {
      id: '2',
      title: 'Design Conference',
      organizer: {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 w-80">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Announcements</h2>
      <div className="space-y-6">
        {events.map((event) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastAnnouncements;