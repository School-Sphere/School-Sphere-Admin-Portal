import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">
        Welcome, Mr. Sachin Agrawal
      </h1>
      
      <div className="flex items-center gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/dashboard/profile')}
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">Sachin</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Header;