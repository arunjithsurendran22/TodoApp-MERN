import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from './routes/taskRoutes.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/TodoAppReact", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to MongoDB database");
});

app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
