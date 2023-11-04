// src/components/DeleteTask.js
import React from 'react';
import axios from 'axios';

const DeleteTask = ({ taskId }) => {
  const handleDeleteTask = () => {
    axios.delete(`http://localhost:5000/api/tasks/${taskId}`)
      .then((response) => {
        // Handle success
        console.log('Task deleted:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <button onClick={handleDeleteTask}>Delete</button>
  );
};

export default DeleteTask;
