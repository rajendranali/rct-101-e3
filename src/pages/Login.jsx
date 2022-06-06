import axios from 'axios'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { isAuth, login, logout, SetAuth } = useContext(AuthContext)
  const [mail, Setmail] = useState('')
  const [password, Setpassword] = useState('')

  const handleSubmit = () => {
    login()
  }
  const handlechange = (e) => {
    e.preventDefault()
    Setmail(e.target.value)
  }
  const handlepass = (e) => {
    Setpassword(e.target.value)
  }
  return (
    <div>
      <input data-cy="login-email" value={mail} onChange={handlechange} />
      <input
        data-cy="login-password"
        type="password"
        value={password}
        onChange={handlechange}
      />
      <button data-cy="login-submit" type="submit" onClick={handleSubmit}>
        {isAuth ? 'Login' : 'Logout'}
      </button>
    </div>
  )
}

export default Login
