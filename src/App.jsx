import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Completed from './pages/Completed';
import TaskDetails from './pages/TaskDetails';

function App() {
  // Initialize from localStorage or default tasks
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      return JSON.parse(saved);
    }
    // Default tasks for first run
    return [
      { 
        id: 1, 
        title: '👋 Hello & Welcome to Task Master!', 
        completed: false,
        variant: 'info' 
      },
      { 
        id: 2, 
        title: '⚠️ Disclaimer: This is a demo project. Please do not store sensitive data.', 
        completed: false,
        variant: 'warning'
      },
    ];
  });

  // Save to Local Storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // 2️⃣ Add New Task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // Simulating unique ID
      title,
      completed: false,
      userId: 1,
    };
    setTasks([newTask, ...tasks]);
  };

  // 3️⃣ Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 4️⃣ Mark as Completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      
      <Routes>
        {/* 5️⃣ Routing Pages */}
        <Route 
          path="/" 
          element={
            <Home 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleTask} 
            />
          } 
        />
        <Route 
          path="/add" 
          element={<AddTask onAdd={addTask} />} 
        />
        <Route 
          path="/completed" 
          element={
            <Completed 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleTask} 
            />
          } 
        />
        <Route 
          path="/task/:id" 
          element={
            <TaskDetails 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleTask} 
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
