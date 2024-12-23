import React from 'react';
import Header from '../components/Header';
import StatsGrid from '../components/dashboard/StatsGrid';
import MonthCalendar from '../components/MonthCalendar';
import MessageList from '../components/MessageList';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-6">
        <StatsGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthCalendar />
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;