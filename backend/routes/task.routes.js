import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  deleteAllTasks,
} from "../controllers/task.controller.js";
import isAuth from "../middleware/isAuth.middleware.js";

const router = express.Router();

router.post("/createTask",isAuth, createTask);
router.get("/getAllTasks",isAuth, getAllTasks);
router.put("/updateTask/:id",isAuth, updateTask);
router.delete("/deleteTask/:id",isAuth, deleteTask);
router.delete("/deleteAllTasks",isAuth, deleteAllTasks);

export default router;
