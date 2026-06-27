import React from 'react'

export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = {...tasks[index], completed: !tasks[index].completed };
      updateTask(updatedTask, index);
    };
  

  return (
    <ul className='task-list'>
      {tasks.map((task, index) => {
        return (
        <li key={index}>
          <div>
            <span>
              {task.text}
              <small>({task.priority} , {task.category})</small>
            </span>
          </div>
          <div>
            <button onClick={() =>toggleComplete(index)}>{task.completed ? "Undo":"Complete"}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
        );
      })}
    </ul>
    
  );
}

