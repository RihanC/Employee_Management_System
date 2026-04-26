import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react';
import { AuthContext } from './context/AuthProvider'

const App = () => {

      useEffect(() => {
      setLocalStorage()
      getLocalStorage()
    
    }, [])


    const [user, setUser] = useState(null)
    
    const authData = useContext(AuthContext)

    //console.log()

    useEffect(() => {
      
      if(authData){
        const loggedInUser = localStorage.getItem("loggedInUser")
      }
      
    
    }, [authData])
    

    const handleLogin = (email, password) =>{
      // console.log(email, password)
      if(email == "admin@me.com" && password == "123"){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role : 'admin'}))

      }else if(authData && authData.employees.find((e) => e.email == email && e.password == password) ){
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({role : 'employee'}))

      }else{
        alert("Invalid Credentials")
      }

    }


  return (

    <>
      {!user ?  <Login handleLogin={handleLogin} /> : ''}

      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    
    </>
      
  )
}

export default App
