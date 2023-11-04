// src/components/UpdateTask.js
import React, { useState } from "react";
import axios from "axios";

const UpdateTask = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdateTask = () => {
    axios
      .put(`http://localhost:5000/api/tasks/${task._id}`, {
        title,
        description,
      })
      .then((response) => {
        // Handle success
        console.log("Task updated:", response.data);
        // You can also update the task list by re-fetching tasks from the server.
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpdateTask}>Update</button>
    </div>
  );
};

export default UpdateTask;
