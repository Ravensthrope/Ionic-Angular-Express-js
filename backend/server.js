import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample in-memory data storage (for development purposes)
let todos = [];

// Routes
app.get("/todos", (req, res) => {
  console.log("All todos: ", todos);
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  console.log("Adding new Todo", newTodo);
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  console.log("Deleting todo...");
  todos = todos.filter((todo) => {
    todo.id !== parseInt(id, 10);
    console.log(todo);
  });
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
