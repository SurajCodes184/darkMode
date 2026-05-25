import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0,
}



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increase : (state) => {
          state.value += 1
        },
        decrease : (state) => {
            if(state.value > 0){
                state.value -= 1
            }
        },
        incrementByAmount : (state,action) => {
          state.value += action.payload
        },
        reset : (state) => {
          state.value = 0
        },
    }
})


export const { increase, decrease, reset,incrementByAmount } = counterSlice.actions
export default counterSlice.reducer