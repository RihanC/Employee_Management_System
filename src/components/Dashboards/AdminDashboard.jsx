import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <div>
        <form>
          <h3>Task Title</h3>
          <input type="text " placeholder='Make a UI' />
          <h3>Description</h3>
          <textarea name="description" id=""></textarea>
          <h3>Date</h3>
          <input type="date" name="" id="" />
          <h3>Assign To</h3>
          <input type="text" placeholder='Employee Name' />
          <h3>Category</h3>
          <input type="text" placeholder='dev/' />
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
