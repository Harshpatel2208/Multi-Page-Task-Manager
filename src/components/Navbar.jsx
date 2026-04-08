import { NavLink } from 'react-router-dom';
import { CheckSquare, PlusCircle, List } from 'lucide-react';

export default function Navbar() {
  const getLinkClass = ({ isActive }) =>
    `flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-4 py-3 sm:p-4 mb-6">
      <div className="container mx-auto flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 justify-center sm:justify-start">
          <CheckSquare className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
          Task Master
        </h1>
        <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-4">
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
