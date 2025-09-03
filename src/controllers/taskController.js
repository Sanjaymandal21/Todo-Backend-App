import Todo from "../models/Task.model.js";

// Create Todo
export const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  View All Todos
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

//  Update Todo
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  Delete Todo
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




