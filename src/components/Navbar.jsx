import { NavLink } from 'react-router-dom';
import { CheckSquare, PlusCircle, List } from 'lucide-react';

export default function Navbar() {
  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <CheckSquare className="w-8 h-8 text-blue-600" />
          Task Master
        </h1>
        <div className="flex gap-4">
          <NavLink to="/" className={getLinkClass}>
            <List size={20} />
            <span className="hidden sm:inline">Tasks</span>
          </NavLink>
          <NavLink to="/add" className={getLinkClass}>
            <PlusCircle size={20} />
            <span className="hidden sm:inline">Add Task</span>
          </NavLink>
          <NavLink to="/completed" className={getLinkClass}>
            <CheckSquare size={20} />
            <span className="hidden sm:inline">Completed</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
