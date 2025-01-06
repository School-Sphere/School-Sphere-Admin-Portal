import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fetchClasses } from '../api/classApi';

const AddStudent = () => {
  const navigate = useNavigate();

  // State for classes and loading
  const [classes, setClasses] = useState<{ id: string; className: string; section: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch classes from API
  const loadClasses = async () => {
    try {
      setLoading(true);

      // Get token from sessionStorage or localStorage
      const token = sessionStorage.getItem('token') || localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      // Fetch classes from the API
      const response = await fetchClasses(1, token); // Assuming page=1 initially
      setClasses(response.data.docs); // Save classes to state
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load classes on component mount
  useEffect(() => {
    loadClasses();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/dashboard/students');
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/dashboard/students')}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Students
      </button>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Student</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
              <label className="block text-sm font-medium text-gray-700">Student ID <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Class <span className="text-red-500">*</span>
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
                required
              >
                <option value="" disabled>
                  {loading ? 'Loading classes...' : 'Please Select Class'}
                </option>
                {classes.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>
                    Class {classItem.className} - Section {classItem.section}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3">
                <option>Please Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date Of Birth</label>
              <input
                type="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Group</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3">
                <option>Please Select Blood Group</option>
                {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(group => (
                  <option key={group}>{group}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Religion</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3">
                <option>Please Select Religion</option>
                {['Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Other'].map(religion => (
                  <option key={religion}>{religion}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Admission Date</label>
              <input
                type="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Parent Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Occupation</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
                />
              </div>

            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-6">
              <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 mb-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5h.008v.008h-.008v-.008zM21 21H3a2 2 0 01-2-2V7a2 2 0 012-2h3.172a2 2 0 001.414-.586l1.828-1.828a2 2 0 011.414-.586h3.172a2 2 0 011.414.586l1.828 1.828a2 2 0 001.414.586H21a2 2 0 012 2v12a2 2 0 01-2 2zM15.75 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Upload Student Photo (150px X 150px)</p>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start space-x-4">
            <button
              type="submit"
              className="px-10 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/students')}
              className="px-10 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;