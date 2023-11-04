// routes/taskRoutes.js
import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();

router.post("/tasks", taskController.createTask);
router.get("/tasks", taskController.getTasks);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

export default router;
