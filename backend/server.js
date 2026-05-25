import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import connectDB from "./config/db.js";

import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

connectDB();

const app = express();


// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/todos", todoRoutes);


app.get("/", (req, res) => {
  res.send("API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});