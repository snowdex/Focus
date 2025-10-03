import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../store/authSlice"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/signup", data);
      // console.log(res.data.token)
      localStorage.setItem("token", res.data.token)
      dispatch(login({isAuthenticated: true, token: res.data.token, user: res.data.user}))
      navigate("/dashboard")
    } catch (error) {
      console.log("Error: ", error.message)
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-700 px-4">
      <div className="w-full max-w-md bg-gray-500 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome <span className="text-green-500 doto-unique">USER</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Username */}
          <div>
            <label className="block text-white font-medium mb-2">
              Username
            </label>
            <input
              type="username"
              placeholder="abxy._"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none text-white focus:ring-2 focus:ring-purple-400"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="abcd@xyz.com"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none text-white focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("remember")}
                className="w-4 h-4 border rounded"
              />
              Remember me
            </label>
            <Link to={""} className="text-purple-800 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-medium hover:opacity-90"
          >
            Sign up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-black text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Logins */}
        <div className="flex gap-4 items-center justify-evenly">
          <button className="border p-3 rounded-lg hover:bg-black">
            <FaGithub  color="white" size={30}/>
          </button>
          <button className="border p-3 rounded-lg hover:bg-black">
            <FaGoogle color="white" size={30}/>
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/signup" className="text-purple-800 hover:underline">
            Login Now!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
