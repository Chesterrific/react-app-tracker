import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th 2:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Run",
      day: "Mar 15th 5:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Game",
      day: "May 7th 8:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        toggleAdd={() => setShowAddTask(!showAddTask)}
      ></Header>
      {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ""}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
