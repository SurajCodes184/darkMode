const BASE_URL = import.meta.env.VITE_BASE_URL;


// GET TODOS
export const getTodosApi = async () => {

  const response = await fetch(
    `${BASE_URL}/todos`
  );

  const data = await response.json();

  return data;
};


// ADD TODO
export const addTodoApi = async (text) => {

  const response = await fetch(
    `${BASE_URL}/todos`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ text }),
    }
  );

  const data = await response.json();

  return data;
};


// UPDATE TODO
export const updateTodoApi = async (
  id,
  text
) => {

  const response = await fetch(
    `${BASE_URL}/todos/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ text }),
    }
  );

  const data = await response.json();

  return data;
};


// DELETE TODO
export const deleteTodoApi = async (id) => {

  const response = await fetch(
    `${BASE_URL}/todos/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  return data;
};