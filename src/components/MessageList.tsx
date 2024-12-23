import React from 'react';

const messages = [
  {
    id: 1,
    sender: 'Sumit Sharma',
    message: 'Anytime, Keep practicing!',
    time: '10:25',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  // Add more messages as needed
];

const MessageList = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Messages</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700">View More</button>
      </div>
      
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-center gap-3">
            <img
              src={message.avatar}
              alt={message.sender}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{message.sender}</h4>
                <span className="text-sm text-gray-500">{message.time}</span>
              </div>
              <p className="text-sm text-gray-600">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;