import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface TeacherData {
  id: number;
  name: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  admissionDate: string;
  classTeacher: number;
}

const mockTeacher: TeacherData = {
  id: 22,
  name: "David Johnson",
  gender: "Male",
  dateOfBirth: "07.08.2016",
  email: "arabagrant@gmail.com",
  admissionDate: "07.08.2019",
  classTeacher: 4
};

const TeacherDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
        <div className="flex items-start gap-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
            alt={mockTeacher.name}
            className="w-48 h-48 rounded-full object-cover"
          />
          
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{mockTeacher.name}</h1>
            <p className="text-gray-600 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <label className="text-sm text-gray-500">ID Number:</label>
                <p className="text-gray-900">{mockTeacher.id}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Name:</label>
                <p className="text-gray-900">{mockTeacher.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender:</label>
                <p className="text-gray-900">{mockTeacher.gender}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date Of Birth:</label>
                <p className="text-gray-900">{mockTeacher.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">E-mail:</label>
                <p className="text-gray-900">{mockTeacher.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Admission Date:</label>
                <p className="text-gray-900">{mockTeacher.admissionDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Class Teacher:</label>
                <p className="text-gray-900">{mockTeacher.classTeacher}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;