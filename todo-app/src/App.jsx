
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    setTasks([
      ...tasks,
      { text: task.trim(), completed: false }
    ]);

    setTask("");
  }

  function toggleTask(index) {
    setTasks(tasks.map((item, i) =>
      i === index
        ? { ...item, completed: !item.completed }
        : item
    ));
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(index)}
            />

            <span className={item.completed ? "completed" : ""}>
              {item.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
