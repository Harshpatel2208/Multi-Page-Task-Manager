import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaskCard({ task, onDelete, onToggle }) {
  const getCardStyle = () => {
    if (task.completed) return 'bg-gray-100 border-gray-200 opacity-60';
    
    switch (task.variant) {
      case 'info':
        return 'bg-blue-50 border-blue-200 hover:shadow-md hover:border-blue-400';
      case 'warning':
        return 'bg-amber-50 border-amber-200 hover:shadow-md hover:border-amber-400';
      default:
        return 'bg-white border-gray-200 hover:shadow-md hover:border-blue-300';
    }
  };

  return (
    <div className={`p-4 rounded-lg shadow-sm border transition-all duration-200 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ${getCardStyle()}`}>
      <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0 overflow-hidden">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
        />
        <Link to={`/task/${task.id}`} className={`text-base sm:text-lg break-words hover:underline ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </Link>
      </div>
      
      <button
        onClick={() => onDelete(task.id)}
        className="self-end sm:self-auto sm:ml-4 p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
        title="Delete Task"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
