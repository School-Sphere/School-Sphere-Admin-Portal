import Header from '../components/Header';
import StatsGrid from '../components/dashboard/StatsGrid';

const ClassTable = () => {
  const classData = [
    {
      class: 'Class -6',
      section: 'A',
      teacher: 'Sushmita Sharma',
      session: '2023-24',
      strength: 40,
    },
    {
      class: 'Class -6',
      section: 'A',
      teacher: 'Sushmita Sharma',
      session: '2023-24',
      strength: 40,
    },
    {
      class: 'Class -6',
      section: 'A',
      teacher: 'Sushmita Sharma',
      session: '2023-24',
      strength: 40,
    },
  ];

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
                Session
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classInfo.session}</td>
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