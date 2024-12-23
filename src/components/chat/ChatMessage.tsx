import React from 'react';

interface ChatMessageProps {
  content: string;
  timestamp: string;
  isOwn?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, timestamp, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] rounded-lg px-4 py-2 ${
        isOwn ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'
      }`}>
        <p className="text-sm">{content}</p>
        <span className={`text-xs ${isOwn ? 'text-indigo-200' : 'text-gray-500'}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;