import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface StudentData {
  id: number;
  name: string;
  gender: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  religion: string;
  fatherOccupation: string;
  email: string;
  admissionDate: string;
  class: number;
}

const mockStudent: StudentData = {
  id: 22,
  name: "Daniel Grant",
  gender: "Male",
  fatherName: "Steve Grant",
  motherName: "Naomi Grant",
  dateOfBirth: "07.08.2016",
  religion: "Islam",
  fatherOccupation: "Graphic Designer",
  email: "arabagrant@gmail.com",
  admissionDate: "07.08.2019",
  class: 2
};

const StudentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
        <div className="flex items-start gap-8">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=300&h=300"
            alt={mockStudent.name}
            className="w-48 h-48 rounded-full object-cover"
          />
          
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{mockStudent.name}</h1>
            <p className="text-gray-600 mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <label className="text-sm text-gray-500">ID Number:</label>
                <p className="text-gray-900">{mockStudent.id}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Name:</label>
                <p className="text-gray-900">{mockStudent.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender:</label>
                <p className="text-gray-900">{mockStudent.gender}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Father Name:</label>
                <p className="text-gray-900">{mockStudent.fatherName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Mother Name:</label>
                <p className="text-gray-900">{mockStudent.motherName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date Of Birth:</label>
                <p className="text-gray-900">{mockStudent.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Religion:</label>
                <p className="text-gray-900">{mockStudent.religion}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Father Occupation:</label>
                <p className="text-gray-900">{mockStudent.fatherOccupation}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">E-mail:</label>
                <p className="text-gray-900">{mockStudent.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Admission Date:</label>
                <p className="text-gray-900">{mockStudent.admissionDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Class:</label>
                <p className="text-gray-900">{mockStudent.class}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;