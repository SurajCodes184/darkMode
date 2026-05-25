import Todo from "../models/todoModel.js";


// GET TODOS
export const getTodos = async (req, res) => {

  try {

    const todos = await Todo.find();

    res.status(200).json(todos);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ADD TODO
export const addTodo = async (req, res) => {

  try {

    const { text } = req.body;

    const todo = await Todo.create({
      text,
    });

    res.status(201).json(todo);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// UPDATE TODO
export const updateTodo = async (req, res) => {

  try {

    const { id } = req.params;

    const { text } = req.body;

    const updatedTodo =
      await Todo.findByIdAndUpdate(
        id,
        { text },
        { new: true }
      );

    res.status(200).json(updatedTodo);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// DELETE TODO
export const deleteTodo = async (req, res) => {

  try {

    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      message: "Todo Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};