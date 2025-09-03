import express from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/add", createTodo);
router.get("/list", getTodos);
router.put("/edit/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;



