import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./features/counter/counterSlice";
import { authSlice } from "./features/auth/authSlice";



const store = configureStore({
    reducer : {
        auth : authSlice,
        counter : counterSlice
    }
})



export default store;
