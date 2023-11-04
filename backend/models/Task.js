import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  descripton: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
