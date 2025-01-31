import React from 'react';
import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');

    navigate('/login');
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Cover Image */}
        <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
            alt="Profile Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Section */}
        <div className="px-6 pb-6">
          {/* Profile Picture */}
          <div className="relative -mt-20 mb-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>

          <h1 className="text-2xl font-bold mb-6">Sachin Agrawal - Admin</h1>

          <form className="max-w-2xl space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                School Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                defaultValue="arabagrant@gmail.com"
                className="w-full px-3 py-2 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No
              </label>
              <input
                type="tel"
                defaultValue="0264622310"
                className="w-full px-3 py-2 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                defaultValue="Greater Noida"
                className="w-full px-3 py-2 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Save
              </button>
            </div>
          </form>

          <button
            onClick={handleLogout}
            className="mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;