import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react';

const App = () => {

      useEffect(() => {
      setLocalStorage()
      getLocalStorage()
    
    },)


    const [user, setUser] = useState(null)

    const handleLogin = (email, password) =>{
      console.log(email, password)
    }

    handleLogin()

  return (

    <>
      {!user ?  <Login /> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    
    </>
      
  )
}

export default App
