import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddTask() {

  const token = useSelector((state)=> state.auth.token);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async(data) => {
    const res = await axios.post("http://localhost:3000/api/v1/dashboard/task/new",data, {
      headers: {
              Authorization: `Bearer ${token}`,
            },
    });
    console.log(res.data)
    reset(); // clear form after submit
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-lg p-6 text-gray-200 doto-unique">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Add New Task</h2>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        {/* Task Title */}
        <div>
          <label className="block text-sm mb-1">Task Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 outline-1  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter task title"
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            {...register("description")}
            rows="3"
            className="w-full px-3 py-2 rounded-md bg-gray-800 outline-1 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter task description"
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm mb-1">Due Date</label>
          <input
            type="date"
            {...register("dueDate")}
            className="w-full px-3 py-2 rounded-md bg-gray-800 outline-1 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Priority */}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors font-semibold"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
