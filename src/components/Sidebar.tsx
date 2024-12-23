import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  Bell, 
  MessageSquare 
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Students', path: '/dashboard/students' },
  { icon: GraduationCap, label: 'Teachers', path: '/dashboard/teachers' },
  { icon: DollarSign, label: 'Finance', path: '/dashboard/finance' },
  { icon: Calendar, label: 'Events', path: '/dashboard/events' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
  { icon: MessageSquare, label: 'Chats', path: '/dashboard/chats' },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-indigo-600 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-indigo-600 font-bold">S</span>
        </div>
        <span className="text-xl font-bold">SchoolSphere</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-white text-indigo-600' 
                  : 'hover:bg-indigo-700'
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;