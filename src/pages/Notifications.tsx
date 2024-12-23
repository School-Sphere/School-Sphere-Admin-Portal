import React from 'react';
import NotificationItem from '../components/notifications/NotificationItem';
import { Plus } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
          <div className="text-sm breadcrumbs text-gray-500">
            <span>Home</span> &gt; <span>Notifications</span>
          </div>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Create Notification
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4">Today</h2>
            <div className="space-y-4">
              <NotificationItem
                time="Monday, June 31 2020"
                content={<>Karen Hope has created new task at <span className="text-indigo-600">History Lesson</span></>}
              />
              <NotificationItem
                time="Monday, June 31 2020"
                content={<><span className="text-red-600">[REMINDER]</span> Due date of <span className="text-indigo-600">Science Homework</span> task will be coming</>}
              />
              <NotificationItem
                time="Monday, June 31 2020"
                content={<>Tony Soap commented at <span className="text-indigo-600">Science Homework</span></>}
              />
              <NotificationItem
                time="Monday, June 31 2020"
                content={<>Samantha William add 4 files on <span className="text-indigo-600">Art Class</span></>}
                attachments={['file1.jpg', 'file2.jpg', 'file3.jpg']}
              />
              <NotificationItem
                time="Monday, June 31 2020"
                content={<>You has moved <span className="text-indigo-600">Biology Homework</span> task to Done</>}
              />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4">Yesterday</h2>
            <div className="space-y-4">
              <NotificationItem
                time="Sunday, June 30 2020"
                content={<>Johnny Ahmad mentioned you at <span className="text-indigo-600">Art Class Homework</span></>}
              />
              <NotificationItem
                time="Sunday, June 30 2020"
                content={<>Nadila Adja mentioned you at <span className="text-indigo-600">Programming Homework</span></>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;