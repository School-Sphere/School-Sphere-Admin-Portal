import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fetchTeacherById } from '../api/teacherApi'; // API function to fetch teacher details
import { Teacher } from '../models/teacherModel'; // Updated Teacher model

const TeacherDetail: React.FC = () => {
  const navigate = useNavigate();
  const { teacherId } = useParams<{ teacherId: string }>();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTeacherData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token is missing');
        }
        const teacherData = await fetchTeacherById(teacherId || '', token);
        setTeacher(teacherData);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch teacher data');
      } finally {
        setLoading(false);
      }
    };

    if (teacherId) {
      getTeacherData();
    }
  }, [teacherId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-2 border-b-2 border-indigo-600 rounded-full w-10 h-10 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  if (!teacher) {
    return <p className="text-gray-500 text-center mt-4">No teacher data found</p>;
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate('/dashboard/teachers')}
        className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Teachers
      </button>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-8">
          {/* Profile Picture or Thumbnail */}
          {teacher.profilePicture ? (
            <img
              src={teacher.profilePicture}
              alt={teacher.name}
              className="w-48 h-48 rounded-full object-cover"
            />
          ) : (
            <div className="w-48 h-48 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-600 text-6xl font-bold">
                {teacher.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div className="flex-1">
            {/* Teacher Name */}
            <h1 className="text-3xl font-bold text-indigo-600">{teacher.name}</h1>
            <p className="text-gray-600 mt-2 text-lg">Details about the teacher:</p>

            {/* Teacher Details */}
            <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <label className="text-sm text-gray-500">ID Number:</label>
                <p className="text-lg text-gray-900">{teacher.teacherId}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Name:</label>
                <p className="text-lg text-gray-900">{teacher.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender:</label>
                <p className="text-lg text-gray-900">{teacher.gender || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date Of Birth:</label>
                <p className="text-lg text-gray-900">{teacher.dob || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">E-mail:</label>
                <p className="text-lg text-gray-900">{teacher.email || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Contact Number:</label>
                <p className="text-lg text-gray-900">{teacher.contactNumber || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Blood Group:</label>
                <p className="text-lg text-gray-900">{teacher.bloodGroup || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Religion:</label>
                <p className="text-lg text-gray-900">{teacher.religion || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Address:</label>
                <p className="text-lg text-gray-900">{teacher.address || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Designation:</label>
                <p className="text-lg text-gray-900">{teacher.designation || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Qualifications:</label>
                <p className="text-lg text-gray-900">{teacher.qualifications || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Class Assigned:</label>
                <p className="text-lg text-gray-900">
                  {teacher.className ? `${teacher.className} - ${teacher.section}` : '-'}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date Of Joining:</label>
                <p className="text-lg text-gray-900">{teacher.doj || '-'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;