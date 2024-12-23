import React, { useState } from 'react';
import ChatSidebar from '../components/chat/ChatSidebar';
import ChatMessage from '../components/chat/ChatMessage';
import { Send, PaperclipIcon } from 'lucide-react';

const mockContacts = [
  {
    id: '1',
    name: 'Sumit Sharma',
    lastMessage: 'Anytime, Keep practicing!',
    time: '10:25',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // Add more mock contacts
];

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(mockContacts[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <ChatSidebar
        contacts={mockContacts}
        onSelectContact={(id) => setSelectedContact(mockContacts.find(c => c.id === id)!)}
        selectedContactId={selectedContact?.id}
      />
      
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <img
              src={selectedContact.avatar}
              alt={selectedContact.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">{selectedContact.name}</h3>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <ChatMessage
            content="Good Morning sir!"
            timestamp="11:31 AM"
            isOwn={true}
          />
          <ChatMessage
            content="Sir, from which date exam will start?"
            timestamp="11:31 AM"
            isOwn={true}
          />
          <ChatMessage
            content="I think from 15 November"
            timestamp="11:35 AM"
          />
          <ChatMessage
            content="Start your preparation for exams"
            timestamp="11:41 AM"
          />
          <ChatMessage
            content="Thanks!"
            timestamp="11:31 AM"
            isOwn={true}
          />
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <PaperclipIcon className="w-5 h-5 text-gray-500" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;