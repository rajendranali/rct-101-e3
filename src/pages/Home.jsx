import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Product from '../components/Products/Product/Product'
import { Navigate } from 'react-router'
import Login from './Login'
const Home = () => {
  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    return <Product />
  } else {
    return <Login />
  }
}

export default Home
