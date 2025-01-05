import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchStudents } from '../api/studentApi';
import { fetchClasses } from '../api/studentApi'; // Import the fetchClasses API
import { Student } from '../models/studentModel';
import SearchBar from '../components/common/SearchBar';

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);
  const [classes, setClasses] = useState<string[]>([]); // State for classes
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state for students
  const [loadingClasses, setLoadingClasses] = useState(false); // Loading state for classes dropdown
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const fetchStudentData = async () => {
    try {
      setLoading(true); // Show loader before fetching students

      // Get token from localStorage or sessionStorage
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      // Fetch students from the API
      const response = await fetchStudents(page, token);
      setStudents(response.data.docs); // Set the students data
      setTotalPages(response.data.totalPages); // Set the total pages
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false); // Hide loader after fetching students
    }
  };

  const fetchClassData = async () => {
    try {
      setLoadingClasses(true); // Show loader before fetching classes

      // Get token from localStorage or sessionStorage
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      // Fetch classes from the API
      const response = await fetchClasses(1, token); // Fetch page 1 of classes
      const classList = response.data.docs.map(
        (cls: { className: string; section: string }) =>
          `${cls.className}${cls.section ? ` - ${cls.section}` : ''}`
      );
      setClasses(classList); // Set classes in the state
    } catch (error) {
      console.error('Error fetching classes:', error);
    } finally {
      setLoadingClasses(false); // Hide loader after fetching classes
    }
  };

  // Fetch students when the component mounts or when `page` changes
  useEffect(() => {
    fetchStudentData();
  }, [page]);

  // Fetch classes when the component mounts
  useEffect(() => {
    fetchClassData();
  }, []);

  const handleRowClick = (studentId: string) => {
    navigate(`/dashboard/students/${studentId}`);
  };

  const filteredData = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedClass || student.className === selectedClass)
  );

  return (
    <div className="p-6">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/dashboard/students/add')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Import from CSV
          </button>

          <button
            onClick={() => navigate('/dashboard/students/add')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Student
          </button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchBar onSearch={setSearchTerm} placeholder="Search by name..." />
        <select
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          disabled={loadingClasses} // Disable dropdown while loading
        >
          <option value="">{loadingClasses ? 'Loading Classes...' : 'Select Class'}</option>
          {!loadingClasses &&
            classes.map((cls, index) => (
              <option key={index} value={cls}>
                {cls}
              </option>
            ))}
        </select>
      </div>

      {/* Show Loader or Table */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="loader border-t-2 border-b-2 border-indigo-600 rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg">
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
                {filteredData.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleRowClick(student.id)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.studentId || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.name || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.gender || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.className && student.section
                        ? `${student.className} - ${student.section}`
                        : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.parentContact || '-'}
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

export default Students;