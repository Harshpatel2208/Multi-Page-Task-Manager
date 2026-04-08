import TaskForm from '../components/TaskForm';

export default function AddTask({ onAdd }) {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Create a New Task</h2>
      <TaskForm onAdd={onAdd} />
    </div>
  );
}
