import React, { useState } from 'react';

function Crudapp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
    { id: 3, title: 'Task 3', description: 'Description 3' },
  ]);

  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.title.trim() !== '') {
      const newTaskObject = {
        id: tasks.length + 1,
        title: newTask.title,
        description: newTask.description,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask({ title: '', description: '' });
    }
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditingTask({ ...taskToEdit });
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? editingTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        {editingTask ? (
          <button onClick={updateTask}>Update Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crudapp;