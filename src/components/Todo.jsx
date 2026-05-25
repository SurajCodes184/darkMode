import { useState } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "../features/todo/todoSlice";

const Todo = () => {

  const [input, setInput] = useState("");

  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();

  const todos = useSelector(
    (state) => state.todo.todos
  );

  // Add or Update
  const handleSubmit = () => {

    if (!input.trim()) return;

    // Update Todo
    if (editId) {

      dispatch(
        updateTodo({
          id: editId,
          text: input,
        })
      );

      setEditId(null);

    } else {

      // Add Todo
      dispatch(addTodo(input));
    }

    setInput("");
  };

  // Edit Button
  const handleEdit = (todo) => {

    setInput(todo.text);

    setEditId(todo.id);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
      }}
    >

      <h1>Redux Todo App</h1>

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
            key={todo.id}
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
                dispatch(deleteTodo(todo.id))
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