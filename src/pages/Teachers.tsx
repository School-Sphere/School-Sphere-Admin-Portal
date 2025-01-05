import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchTeachers } from '../api/studentApi';
import { Teacher } from '../models/teacherModel';
import SearchBar from '../components/common/SearchBar';

const Teachers = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTeacherData = async () => {
    try {
      setLoading(true);

      // Get token from localStorage or sessionStorage
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      // Fetch teachers from the API
      const response = await fetchTeachers(page, token);
      setTeachers(response.data.docs); // Set teachers data
      setTotalPages(response.data.totalPages); // Set total pages
    } catch (error) {
      console.error('Error fetching teachers:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch teachers on mount or when `page` changes
  useEffect(() => {
    fetchTeacherData();
  }, [page]);

  const handleRowClick = (teacherId: string) => {
    navigate(`/dashboard/teachers/${teacherId}`);
  };

  const filteredData = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedSubject || teacher.className === selectedSubject)
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Teachers</h1>
        <button
          onClick={() => navigate('/dashboard/teachers/add')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Teacher
        </button>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchBar onSearch={setSearchTerm} placeholder="Search by name..." />
        <select
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'].map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="loader border-t-2 border-b-2 border-indigo-600 rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-600 tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-600 tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-600 tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-600 tracking-wider">Class</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-600 tracking-wider">Phone</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((teacher) => (
                  <tr
                    key={teacher.id}
                    onClick={() => handleRowClick(teacher.id)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.teacherId || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.name || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.gender || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.className ? `${teacher.className} - ${teacher.section}` : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.contactNumber || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center p-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              <ChevronLeft className="h-5 w-5 inline-block" /> Previous
            </button>
            <span className="text-sm font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium"
              onClick={() => setPage((prev) => (page < totalPages ? prev + 1 : prev))}
              disabled={page === totalPages}
            >
              Next <ChevronRight className="h-5 w-5 inline-block" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;