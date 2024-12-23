import React from 'react';

interface NotificationItemProps {
  time: string;
  content: React.ReactNode;
  attachments?: string[];
}

const NotificationItem: React.FC<NotificationItemProps> = ({ time, content, attachments }) => {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0">
        <div className="w-2 h-2 mt-2 bg-indigo-600 rounded-full"></div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{time}</p>
        <div className="text-sm text-gray-900">{content}</div>
        {attachments && attachments.length > 0 && (
          <div className="mt-2 flex gap-2">
            {attachments.map((attachment, index) => (
              <div key={index} className="w-24 h-16 bg-gray-100 rounded"></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;