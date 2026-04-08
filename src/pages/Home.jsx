import TaskCard from '../components/TaskCard';
import { Loader2 } from 'lucide-react';

export default function Home({ tasks, loading, error, onDelete, onToggle }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">All Tasks</h2>
      
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No tasks found. Add a new one!</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
