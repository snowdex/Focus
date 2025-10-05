import React, { useState } from "react";
import axios from "axios";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuAlarmClockCheck } from "react-icons/lu";
import { FaPenFancy, FaPen } from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";

function TaskTile({todos, fetch, token}) {
  const [clicked, setClicked] = useState({});

  const toggleTask = async(id) => {
    setClicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    try {
      const res = await axios.put(`http://localhost:3000/api/v1/dashboard/task/update/${id}`, {status: "completed"}, {
      headers: {
              Authorization: `Bearer ${token}`,
            },
    });
      console.log(res.data.message);
      fetch
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      {todos.length > 0 ? (
        todos.map((task) => {
          const isClicked = clicked[task._id] || task.status === "completed"|| false;
          return(<div key={task._id} className="task-tile">
            <div className="bg-gray-700 p-2 rounded-lg">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-3">
                  {!isClicked ? (
                    <MdCheckBoxOutlineBlank
                      onClick={()=>toggleTask(task._id)}
                      color="white"
                    />
                  ) : (
                    <IoIosCheckbox onClick={()=>toggleTask(task._id)} color={"white"} />
                  )}

                  <h2
                    className={`${
                      isClicked ? "line-through text-gray-400" : "text-white"
                    } doto-unique font-bold`}
                  >
                    {task.title}
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <p className={`${
                      isClicked ? "rounded-lg px-0.5 py-2 bg-green-400 flex items-center gap-2 justify-center":"rounded-lg px-0.5 py-2 bg-red-400 flex items-center gap-2 justify-center"}`}>
                        
                    Status: <p>{isClicked ? "Completed" : task.status}</p>
                  </p>
                  <p className="inline-flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
                    <span>
                      <LuAlarmClockCheck color="red" />
                    </span>
                    {new Date(task.dueDate).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
      )}))
  : (
        <h2>No tasks found</h2>
      )}
    </>
  );
}

export default TaskTile;
