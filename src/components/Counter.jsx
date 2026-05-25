import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease,reset,incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const countValue = useSelector((state) => state.counter.value)
    // console.log(useSelector((state) => state))
  return (
    <div className='h-screen flex justify-center items-start'>
      <div>
      <div className='flex justify-center items-center pb-10'>
        <button className='w-[180px] h-[50px] border '>
          count is {countValue}
        </button>
        
      </div>
      <p >
      
       <button className='w-[150px] h-[40px] bg-gray-300 border rounded-md' onClick={() => dispatch(increase())}>+</button>
       <button className='w-[150px] h-[40px] bg-gray-300 border rounded-md' onClick={() => dispatch(decrease())}>-</button>
       <button className='w-[150px] h-[40px] bg-gray-300 border rounded-md' onClick={() => dispatch(reset())}>reset</button>
      <button className='w-[150px] h-[40px] bg-gray-300 border rounded-md' onClick={() => dispatch(incrementByAmount(10))}>Increase 10</button>
      
      </p> 
      </div>
    </div>
  )
}

export default Counter
