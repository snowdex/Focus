import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

function SideBar({menu}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()


  return (
    <aside className="w-64 bg-black border-r border-gray-800 p-6 hidden md:flex flex-col gap-6 font-mono text-sm">
        <div className='flex items-center gap-3'>
          {menu}
          <h2 className="text-green-400 font-bold text-lg">$- /TERMINAL</h2>
        </div>
        <ul className="space-y-4">
          <li className="hover:text-green-400 cursor-pointer doto-unique"><Link>$- /college</Link></li>
          <li className="hover:text-green-400 cursor-pointer doto-unique"><Link>$- /finance</Link></li>
          <li className="hover:text-green-400 cursor-pointer doto-unique"><Link>$- /focus-mode</Link></li>
        </ul>
        <button className='p-4 bg-red-500 text-white doto-unique' onClick={()=>{
            dispatch(logout());
            localStorage.removeItem("token")
            navigate("/");
        }}>Logout</button>
      </aside>
  )
}

export default SideBar