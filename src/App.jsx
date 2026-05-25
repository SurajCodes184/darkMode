import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Todo from "./components/Todo";

function App() {
  return (
    <>

    <Routes>
      
      <Route path='/' element={<Layout />} >
      <Route path='/' element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
 
    </>
  );
}

export default App;
