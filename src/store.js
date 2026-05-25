import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./features/counter/counterSlice";
import { authSlice } from "./features/auth/authSlice";
import todoReducer from "./features/todos/todoSlice";


const store = configureStore({
    reducer : {
        auth : authSlice,
        counter : counterSlice,
        todo: todoReducer,
    }
})



export default store;
