/* eslint-disable simple-import-sort/imports */
// context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if token exists in cookies
    const token = Cookies.get('token')
    setIsLoggedIn(!!token)
  }, [])

  const login = token => {
    Cookies.set('token', token)
    setIsLoggedIn(true)
  }

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('refreshtoken')

    setIsLoggedIn(false)
  }

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
