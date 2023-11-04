// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteTask from './DeleteTask'; // Import DeleteTask component
import UpdateTask from './UpdateTask'; // Import UpdateTask component

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task._id}>
          <p>{task.title}</p>
          <DeleteTask taskId={task._id} /> {/* Use the DeleteTask component */}
          <UpdateTask task={task} /> {/* Use the UpdateTask component */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
