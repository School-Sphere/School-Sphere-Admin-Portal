import React from 'react';

interface ChatContact {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
}

interface ChatSidebarProps {
  contacts: ChatContact[];
  onSelectContact: (id: string) => void;
  selectedContactId?: string;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ contacts, onSelectContact, selectedContactId }) => {
  return (
    <div className="w-64 border-r bg-gray-50">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Chat Room</h2>
        <div className="space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => onSelectContact(contact.id)}
              className={`p-3 rounded-lg cursor-pointer ${
                selectedContactId === contact.id ? 'bg-indigo-50' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {contact.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {contact.lastMessage}
                  </p>
                </div>
                <span className="text-xs text-gray-400">{contact.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;