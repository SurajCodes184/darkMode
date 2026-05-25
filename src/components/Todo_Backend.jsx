import { useEffect, useState } from "react";

import {
  getTodosApi,
  addTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../services/todoService";

const Todo = () => {

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const [editId, setEditId] = useState(null);


  // GET TODOS
  const fetchTodos = async () => {

    const data = await getTodosApi();

    setTodos(data);
  };


  useEffect(() => {
    fetchTodos();
  }, []);


  // ADD + UPDATE
  const handleSubmit = async () => {

    if (!input.trim()) return;


    // UPDATE
    if (editId) {

      await updateTodoApi(editId, input);

      setEditId(null);

    } else {

      // ADD
      await addTodoApi(input);
    }

    setInput("");

    fetchTodos();
  };


  // DELETE
  const handleDelete = async (id) => {

    await deleteTodoApi(id);

    fetchTodos();
  };


  // EDIT
  const handleEdit = (todo) => {

    setInput(todo.text);

    setEditId(todo._id);
  };


  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
      }}
    >

      <h1>Todo App</h1>

      <input
        type="text"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        placeholder="Enter Todo"
      />

      <button onClick={handleSubmit}>

        {
          editId
            ? "Update Todo"
            : "Add Todo"
        }

      </button>

      <hr />

      {
        todos.map((todo) => (

          <div
            key={todo._id}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
            }}
          >

            <p>{todo.text}</p>

            <button
              onClick={() =>
                handleEdit(todo)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                handleDelete(todo._id)
              }
            >
              Delete
            </button>

          </div>

        ))
      }

    </div>
  );
};

export default Todo;