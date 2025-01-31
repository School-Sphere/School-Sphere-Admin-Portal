import React, { useEffect, useState } from 'react';
import { fetchAnnouncements } from '../api/announcementApi'; // Adjust the import path as necessary

const PastAnnouncements: React.FC<{ refresh: boolean }> = ({ refresh }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadAnnouncements = async (page: number) => {
    try {
      setLoading(true);
      setErrorMessage(''); // Reset error message

      // Get token from sessionStorage or localStorage
      const token = sessionStorage.getItem('token') || localStorage.getItem('token');
      if (!token) {
        setErrorMessage('Authentication token not found.');
        return;
      }

      // Fetch announcements from the API
      const response = await fetchAnnouncements(page);
      setAnnouncements(response.data.docs); // Save announcements to state
      setTotalPages(response.data.totalPages); // Save total pages to state
    } catch (error: any) {
      console.error('Error fetching announcements:', error);
      setErrorMessage(error.response?.data?.message || 'Error fetching announcements.');
    } finally {
      setLoading(false);
    }
  };

  // Load announcements on component mount or when `refresh` or `page` changes
  useEffect(() => {
    loadAnnouncements(page);
  }, [page, refresh]); // Add `refresh` to the dependency array

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="p-6 flex flex-col h-full">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-10 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Past Announcements</h1>

        {errorMessage && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {errorMessage}
          </div>
        )}
      </div>

      {/* Scrollable Announcements List */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="space-y-4">
            {announcements.length > 0 ? (
              announcements.map((announcement: any) => (
                <div key={announcement._id} className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">{announcement.title}</h3>
                  <p className="text-gray-700">{announcement.description}</p>
                </div>
              ))
            ) : (
              <div>No announcements found.</div>
            )}
          </div>
        )}
      </div>

      {/* Sticky Pagination Buttons */}
      <div className="sticky bottom-0 bg-white z-10 pt-4">
        <div className="flex justify-between">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">Page {page} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastAnnouncements;