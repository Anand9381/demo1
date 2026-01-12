import React from 'react'
import { Link } from 'react-router-dom'
import'./Signin'
const Nav = () => {
  return (
    <>
    <div className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold">KAJY</h1>

      
      <div className="space-x-4">
        <Link
          to="/"
          className="px-4 py-2 rounded border border-white hover:bg-white hover:text-gray-900 transition"
        >
          Home
        </Link>
        
        <Link
          to="/login"
          className="px-4 py-2 rounded border border-white hover:bg-white hover:text-gray-900 transition"
        >
          Login
        </Link>

        <Link
          to="/signin"
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>

      
    </div>
    </>
  )
}

export default Nav
