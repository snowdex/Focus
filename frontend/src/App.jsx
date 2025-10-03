import Home from "./pages/Home"
import { Routes, Route, useNavigate, } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Finance from "./pages/Finance"
import College from "./pages/College"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useDispatch } from "react-redux"
import { login } from './store/authSlice'
import { useEffect } from "react"
import axios from "axios"

function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchUser = async()=>{
      if(token){
        try {
          const res = await axios.get("http://localhost:3000/api/v1/me",{
            headers: {
              Authorization: `Bearer ${token}`
            }
          } )
          // console.log(res.data.user.user)
          dispatch(login({isAuthenticated: true, token: token, user: res.data.user.user}))
          navigate("/dashboard")
        } catch (error) {
          console.log("Error: ", error)
        }
      }

    }

    fetchUser()
  }, [token, dispatch, navigate])

  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/college" element={<College />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

  )
}

export default App
