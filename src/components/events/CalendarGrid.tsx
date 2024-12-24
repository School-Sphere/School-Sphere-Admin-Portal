import React from 'react';

interface CalendarGridProps {
  currentDate: Date;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate }) => {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map(day => (
        <div key={day} className="text-center text-sm font-medium text-gray-500">
          {day}
        </div>
      ))}
      
      {Array.from({ length: weeks * 7 }).map((_, index) => {
        const dayNumber = index - firstDayOfMonth + 1;
        const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
        const isSelected = dayNumber === 9; // Example: 9th is selected
        const hasEvent = dayNumber === 15; // Example: 15th has event

        return (
          <div
            key={index}
            className={`h-24 border rounded-lg p-2 ${
              isCurrentMonth 
                ? isSelected
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:bg-gray-50'
                : 'bg-gray-50 border-gray-100'
            }`}
          >
            {isCurrentMonth && (
              <>
                <span className="text-sm">{dayNumber}</span>
                {hasEvent && (
                  <div className="mt-1 px-2 py-1 text-xs bg-pink-100 text-pink-600 rounded">
                    Science Exhibition
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;