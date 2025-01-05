import { Users, GraduationCap, Calendar } from 'lucide-react';
import StatsCard from '../StatsCard';

const stats = [
  {
    icon: Users,
    label: 'Total Students',
    value: 250,
    change: { value: 12, type: 'increase' },
  },
  {
    icon: GraduationCap,
    label: 'Total Employees',
    value: 100,
    change: { value: 0.25, type: 'decrease' },
  },
  {
    icon: Calendar,
    label: 'Total Events',
    value: 10,
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;