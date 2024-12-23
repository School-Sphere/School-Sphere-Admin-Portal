import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../components/common/DataTable';
import SearchBar from '../components/common/SearchBar';
import { Plus } from 'lucide-react';

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'gender', header: 'Gender' },
  { key: 'class', header: 'Class' },
  { key: 'parents', header: 'Parents' },
  { key: 'address', header: 'Address' },
  { key: 'dateOfBirth', header: 'Date of Birth' },
  { key: 'phone', header: 'Phone' },
];

const mockData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 22,
  name: 'Daniel Grant',
  gender: 'Male',
  class: Math.floor(Math.random() * 5) + 1,
  parents: 'Kofi Grant',
  address: '59 Australia, Sydney',
  dateOfBirth: '02/05/2001',
  phone: '+ 123 9988568',
}));

const Students = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const filteredData = mockData.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedClass || student.class.toString() === selectedClass)
  );

  const handleRowClick = (studentId: number) => {
    navigate(`/dashboard/students/${studentId}`);
  };

  return (
    <div className="p-6">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
        <button 
          onClick={() => navigate('/dashboard/students/add')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Student
        </button>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchBar 
          onSearch={setSearchTerm} 
          placeholder="Search by name..."
        />
        <select
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>Class {num}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((row) => (
                <tr 
                  key={row.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleRowClick(row.id)}
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;