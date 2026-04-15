import React from 'react'

const CreateTask = () => {
    return (
            <div className= 'p-5 bg-[#484747] rounded-xl mt-5'>
        <form className='flex items-start justify-between w-full '>
        <div className='w-1/2 '>
            <div>
            <h3 className=' p-3 text-xl text-white mb-0.5'>Task Title</h3>
            <input className='hover:border-emerald-400 border-[2px] border-white  text-sm outline-white px-4 py-3 w-4/5 rounded-xl bg-transparent ' type="text " placeholder='Make a UI' />
        </div>
        <div>
            <h3 className=' p-3 text-xl text-white mb-0.5'>Date</h3>
            <input className='hover:border-emerald-400 border-[2px] border-white text-sm outline-white px-4 py-3 rounded-xl w-4/5 ' type="date" name="" id="" />
        </div>
        <div>
            <h3 className=' p-3 text-xl text-white mb-0.5'>Assign To</h3>
            <input className='hover:border-emerald-400 border-[2px] border-white text-sm outline-white px-4 py-3 rounded-xl w-4/5 ' type="text" placeholder='Employee Name' />
        </div>
        <div>
            <h3 className=' p-3 text-xl text-white mb-0.5'>Category</h3>
            <input className='hover:border-emerald-400 border-[2px] border-white text-sm outline-white px-4 py-3 rounded-xl w-4/5 ' type="text" placeholder='dev/' />
        </div>
        </div> 
        <div>
            <div>
            <h3 className=' text-xl text-white mb-0.5'>Description</h3>
            <textarea className='hover:border-emerald-400 border-[2px] border-white h-75 w-160 outline-amber-50 rounded-xl'  name="description" id=""></textarea>
            </div>

        <button className='bg-emerald-400 hover:bg-emerald-700 rounded-xl h-15 w-160 mt-4 text-m'>Create Task</button>

        </div>
        </form>
    </div>
    )
}

export default CreateTask
