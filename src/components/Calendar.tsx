import React from 'react';

const Calendar = () => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">September 2024</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-md">Month</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">Week</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">Day</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square flex items-center justify-center text-sm border rounded-md
              ${i === 8 ? 'bg-indigo-100 border-indigo-200 text-indigo-600' : 'border-gray-100 hover:bg-gray-50'}
            `}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;