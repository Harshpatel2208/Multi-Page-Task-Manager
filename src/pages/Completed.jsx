import TaskCard from '../components/TaskCard';

export default function Completed({ tasks, onDelete, onToggle }) {
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Completed Tasks</h2>
      
      {completedTasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No completed tasks yet. Keep going!</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {completedTasks.map((task) => (
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
