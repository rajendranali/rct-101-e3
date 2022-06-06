import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuth, SetAuth] = useState(false)
  const login = (password, username) => {
    if (isAuth) {
      SetAuth(true)
    }
  }
  const logout = () => {
    SetAuth(false)
  }
  return (
    <AuthContext.Provider value={{ isAuth, login, logout, SetAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
