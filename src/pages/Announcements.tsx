import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Header from '../components/Header';
import PastAnnouncements from '../components/PastAnnouncements';
import AnnouncementForm from '../components/forms/AnnouncementForm';

const Announcements = () => {
  const [refresh, setRefresh] = useState(false);

  const handleAnnouncementAdded = () => {
    setRefresh((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Announcement</h1>
          </div>
        </div>

        <div className="flex h-full">
          <ResizableBox
            className="bg-white rounded-lg shadow-lg flex flex-col h-full"
            width={300}
            height={500}
            resizeHandles={['e']}
            minConstraints={[200, Infinity]}
            maxConstraints={[600, Infinity]}
            axis="x"
          >
            {/* Disable scrolling on ResizableBox */}
            <div className="flex-1 overflow-hidden">
              <PastAnnouncements refresh={refresh} />
            </div>
          </ResizableBox>

          <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col h-full ml-6">
            <div className="flex-1 overflow-y-auto">
              <AnnouncementForm onAnnouncementAdded={handleAnnouncementAdded} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;