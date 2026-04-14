import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between gap-5 mt-10'>
        <div className='w-[45%] bg-red-300 py-10 rounded-xl px-5 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-blue-300 py-10 rounded-xl px-5 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-green-300 py-10 rounded-xl px-5 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-300 py-10 rounded-xl px-5 '>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
