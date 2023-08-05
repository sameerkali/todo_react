import { useEffect, useState } from "react";
import "./styles/App.css";

function App() {
  // State variables
  const [newItem, setNewItem] = useState(""); // State for the new item input
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  }); // State for the list of todos

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false } // Adding a new todo item
      ];
    });
    setNewItem("");
  }

  // Function to toggle the completion status of a todo
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; // Updating the completion status of the selected todo
        }
        return todo;
      });
    });
  }

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); // Removing the selected todo
    });
  }

  // Store data locally through useEfect hook
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {/* Form for adding a new todo */}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      {/* Todo List header */}
      <h1 className="header">Todo List</h1>

      {/* List of todos */}
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                {/* Checkbox to mark todo as completed */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              {/* Button to delete a todo */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
