import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  organizer?: {
    name: string;
    avatar: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, organizer }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
        <span className="text-indigo-600 font-semibold">{date.split(' ')[0]}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">
          {time} • {location}
        </p>
      </div>
      {organizer && (
        <img
          src={organizer.avatar}
          alt={organizer.name}
          className="w-8 h-8 rounded-full"
        />
      )}
    </div>
  );
};

export default EventCard;