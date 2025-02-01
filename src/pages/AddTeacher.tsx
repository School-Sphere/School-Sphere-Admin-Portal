import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createTeacher } from '../api/teacherApi';

const AddTeacher = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // State for form data
  const [formData, setFormData] = useState({
    teacherId: '',
    email: '',
    name: '',
    gender: '',
    dob: '',
    qualification: '',
    experience: '',
    address: '',
    profilePicture: null as File | null,
  });




  // Handler to update form state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // File handler for profile picture
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, profilePicture: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrorMessage(''); // Reset error message

      // Get token from sessionStorage or localStorage
      const token = sessionStorage.getItem('token') || localStorage.getItem('token');
      if (!token) {
        setErrorMessage('Authentication token not found.');
        return;
      }

      // Create form data object for API call
      const teacherData = new FormData();
      Object.keys(formData).forEach((key) => {
        teacherData.append(key, formData[key as keyof typeof formData] as string | Blob);
      });

      // Call createTeacher API
      await createTeacher(teacherData, token);

      // Navigate to teachers list
      navigate('/dashboard/teachers');
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Error creating teacher.');
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/dashboard/teachers')}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Teachers
      </button>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Teacher</h1>

        {errorMessage && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Teacher ID <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="teacherId"
                value={formData.teacherId}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              >
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
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Experience</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base h-12 bg-[#DDDEEE80] px-3"
              />
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
                      d="M15.75 10.5h.008v.008h-.008v-.008zM21 21H3a2 2 0 01-2-2V7a2 2 0 012-2h3.172a2 2 0 001.414-.586l1.828-1.828a2 2 0 011.414-.586h3.172a2 2 0 011.414.586l1.828 1.828a2 2 0 001.414.586H21a2 2 0 012 2v12a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Upload Teacher Photo (150px X 150px)</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
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
              onClick={() => navigate('/dashboard/teachers')}
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

export default AddTeacher;