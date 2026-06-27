import React, { useEffect, useState } from "react"
import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import ProgressTracker from "./Components/ProgressTracker"

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks((prevTasks) =>[...prevTasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtasks = [...tasks];
    newtasks[index] = updatedTask;
    setTasks(newtasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_ , i) => i !== index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div>
      <h1 style={{color: '#4361ee' }}>Task Master</h1>
      <p><i>The friendly task manager</i></p>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} 
       updateTask = {updateTask}
       deleteTask = {deleteTask}
       />

      <ProgressTracker tasks={tasks} />

      {tasks.length>0 &&
      (<button onClick= {clearTasks}
        className='cleat-btn'>
          Cear All Tasks</button>
        )}
    </div>
  )
}


