import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAUth } from '../Auth/Auth'

const Admin = () => {
  const auth = useAUth();
  const navigate = useNavigate()
  const handleLogout = () =>{
    auth.logout();
    navigate('/')
  }
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Current User : {auth.user}</p>
      <h2>Protected Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Admin
