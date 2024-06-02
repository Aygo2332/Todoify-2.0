import express from "express";
import Task from "../models/taskModel.js";
const router = express.Router();
import {createTask,getTasks,getTask,deleteTask,updateTask}  from "../controllers/taskController.js";
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);
export default router;