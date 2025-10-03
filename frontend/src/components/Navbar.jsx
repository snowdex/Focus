import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();


  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to={"/home"} className="text-2xl bungee-regular font-bold text-white tracking-wide">Focus</Link>
          <div className="flex items-center space-x-4">
            <button onClick={()=>navigate("/login")} className="text-gray-300 hover:text-indigo-400 px-4 py-2 rounded-full transition-colors duration-200">Login</button>
            <button onClick={()=>navigate("/signup")} className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition-colors duration-200">Sign Up</button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar