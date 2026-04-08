import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckSquare, Trash2 } from 'lucide-react';

export default function TaskDetails({ tasks, onDelete, onToggle }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id.toString() === id);

  if (!task) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Task Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline flex items-center justify-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Tasks
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    onDelete(task.id);
    navigate('/');
  };

  const getVariantStyles = () => {
    switch (task.variant) {
      case 'info':
        return 'bg-blue-50 border-blue-200';
      case 'warning':
        return 'bg-amber-50 border-amber-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className={`max-w-2xl mx-auto p-8 rounded-xl shadow-lg border ${getVariantStyles()}`}>
        <div className="flex justify-between items-start mb-6">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            task.completed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
          }`}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onToggle(task.id)}
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              title={task.completed ? "Mark as Pending" : "Mark as Completed"}
            >
              <CheckSquare size={24} />
            </button>
            <button
              onClick={handleDelete}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
              title="Delete Task"
            >
              <Trash2 size={24} />
            </button>
          </div>
        </div>

        <h1 className={`text-3xl font-bold mb-4 leading-relaxed ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </h1>
        
        <div className="text-sm text-gray-400 mt-8 border-t pt-4">
          Task ID: {task.id}
        </div>
      </div>
    </div>
  );
}
