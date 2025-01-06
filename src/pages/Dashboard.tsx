import { useEffect, useState } from 'react';
import { fetchClasses } from '../api/studentApi';
import { ClassData } from '../models/classModel';
import Header from '../components/Header';
import StatsGrid from '../components/dashboard/StatsGrid';

const ClassTable = () => {
  const [classData, setClassData] = useState<ClassData[]>([]); // Explicitly define the type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await fetchClasses(1, token || '');
        const classes: ClassData[] = response.data.docs.map((doc: any) => ({
          class: `Class - ${doc.className}`,
          section: doc.section,
          teacher: doc.classTeacher,
          strength: doc.totalStudents,
        }));
        setClassData(classes);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching classes');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="loader border-t-2 border-b-2 border-indigo-600 rounded-full w-10 h-10 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-6">
        <span className="text-red-600 text-lg">{error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Classes Details</h2>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Class
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class Teacher
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Strength
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {classData.map((classInfo, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classInfo.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classInfo.section}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classInfo.teacher}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classInfo.strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="p-6">
        <StatsGrid />

        <div className="grid grid-cols-1 gap-6">
          <ClassTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;