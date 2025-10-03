import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuAlarmClockCheck } from "react-icons/lu";
import { FaPenFancy, FaPen } from "react-icons/fa";
import {
  IoIosCheckbox,
  IoIosArrowDroprightCircle,
  IoIosArrowDropdown,
} from "react-icons/io";
import axios from "axios";

function TaskTile() {
  const [todos, setTodos] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const [clicked, setClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const checkingClicked = () => {
    setClicked(!clicked);
  };

  const checkingExpand = () => {
    setExpanded(!expanded);
  };

  

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/dashboard/task/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data.tasks);
        setTodos(res.data.tasks);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchTodos();
  }, [token]);

  return (
    <>
      {todos.length > 0 ? (
        todos.map((task) => (
          <div key={task._id} className="task-tile p-4 rounded-xl bg-gray-900">
            
            <div className="flex items-center justify-between p-3">
              <h1 className="text-lg font-bold mb-4">Todo's</h1>
              <button
                
                className="bg-gray-800 rounded-xl px-4 py-2 flex items-center gap-2"
              >
                <span>
                  <FaPen color="white" />
                </span>
                Add Task
              </button>
            </div>
            <div className="bg-gray-700 p-2 rounded-lg">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-3">
                  {!clicked ? (
                    <MdCheckBoxOutlineBlank
                      onClick={checkingClicked}
                      color="white"
                    />
                  ) : (
                    <IoIosCheckbox onClick={checkingClicked} color={"white"} />
                  )}
                  {!expanded ? (
                    <IoIosArrowDroprightCircle
                      onClick={checkingExpand}
                      color="black"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={checkingExpand}
                      color="white"
                    />
                  )}

                  <h2
                    className={`${
                      clicked ? "line-through text-gray-400" : "text-white"
                    } doto-unique font-bold`}
                  >
                    {task.title}
                  </h2>
                </div>
                <div className="flex gap-3 items-center">
                  <p className={`${expanded ? "text-gray-400" : "hidden"}`}>
                    {task.description}
                  </p>
                  <FaPenFancy
                    className={`${expanded ? "" : "hidden"} size-5`}
                    color="black"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="rounded-lg p-1 bg-red-400">
                    Status: {task.status}
                  </p>
                  <p className="inline-flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
                    <span>
                      <LuAlarmClockCheck color="white" />
                    </span>
                    {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>No tasks found</h2>
      )}
    </>
  );
}

export default TaskTile;
