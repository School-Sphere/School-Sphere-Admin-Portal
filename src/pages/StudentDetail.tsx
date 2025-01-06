import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fetchStudentById } from '../api/studentApi';
import { Student } from '../models/studentModel';

const StudentDetail: React.FC = () => {
  const navigate = useNavigate();
  const { studentId } = useParams<{ studentId: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getStudentData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token is missing');
        }
        const studentData = await fetchStudentById(studentId || '', token);
        setStudent(studentData);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch student data');
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      getStudentData();
    }
  }, [studentId]);

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

  if (!student) {
    return <p className="text-gray-500 text-center mt-4">No student data found</p>;
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate('/dashboard/students')}
        className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Students
      </button>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-8">
          {/* Profile Picture or Thumbnail */}
          {student.profilePicture ? (
            <img
              src={student.profilePicture}
              alt={student.name}
              className="w-48 h-48 rounded-full object-cover"
            />
          ) : (
            <div className="w-48 h-48 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-600 text-6xl font-bold">
                {student.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div className="flex-1">
            {/* Student Name */}
            <h1 className="text-3xl font-bold text-indigo-600">{student.name}</h1>
            <p className="text-gray-600 mt-2 text-lg">
              Below are the details of the student:
            </p>

            {/* Student Details */}
            <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <label className="text-sm text-gray-500">ID Number:</label>
                <p className="text-lg text-gray-900">{student.studentId}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Name:</label>
                <p className="text-lg text-gray-900">{student.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender:</label>
                <p className="text-lg text-gray-900">{student.gender || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Father Name:</label>
                <p className="text-lg text-gray-900">{student.fatherName || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Mother Name:</label>
                <p className="text-lg text-gray-900">{student.motherName || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date Of Birth:</label>
                <p className="text-lg text-gray-900">{student.dob || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Religion:</label>
                <p className="text-lg text-gray-900">{student.religion || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Father Occupation:</label>
                <p className="text-lg text-gray-900">{student.fatherOccupation || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">E-mail:</label>
                <p className="text-lg text-gray-900">{student.email || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Admission Date:</label>
                <p className="text-lg text-gray-900">{student.doa || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Class:</label>
                <p className="text-lg text-gray-900">
                  {student.className ? `${student.className} - ${student.section}` : '-'}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Contact:</label>
                <p className="text-lg text-gray-900">{student.parentContact || '-'}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Address:</label>
                <p className="text-lg text-gray-900">{student.address || '-'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;