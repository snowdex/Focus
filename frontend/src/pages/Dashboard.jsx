import React from 'react'
import { Link } from 'react-router-dom';
import Tile from '../components/Tile';
import AddTask from '../components/AddTask';
import TaskTile from '../components/TaskTile';

export default function Dashboard() {

  


  
  return (
    <div className="min-h-screen flex bg-gray-950 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-gray-800 p-6 hidden md:flex flex-col gap-6 font-mono text-sm">
        <h2 className="text-green-400 font-bold text-lg">$- /TERMINAL</h2>
        <ul className="space-y-4">
          <li className="hover:text-green-400 cursor-pointer doto-unique"><Link>$- /tasks</Link></li>
          <li className="hover:text-green-400 cursor-pointer doto-unique"><Link>$- /reports</Link></li>
          <li className="hover:text-green-400 cursor-pointer doto-unique"><Link>$- /team</Link></li>
          <li className="hover:text-green-400 cursor-pointer doto-unique"><Link>$- /focus-mode</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold">
            Welcome back, Commander 👩‍💻
          </h1>
          <p className="text-gray-200 mt-2">
            "while(alive) {"} keepLearning(); {"}"  
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-sm text-gray-400">Active Projects</h3>
            <p className="text-3xl font-bold text-green-400">7</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-sm text-gray-400">Tasks Pending</h3>
            <p className="text-3xl font-bold text-yellow-400">24</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-sm text-gray-400">Hours Logged</h3>
            <p className="text-3xl font-bold text-blue-400">132h</p>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-lg font-bold mb-4">Activity Feed</h2>
          <ul className="space-y-3 font-mono text-sm">
            <li className="text-green-400">✔ Task "API Fix" marked as complete</li>
            <li className="text-yellow-400">⚡ Commit synced to repo @12:32PM</li>
            <li className="text-purple-400">🤖 AI suggested refactor for Dashboard.jsx</li>
          </ul>
        </div>

        {/* Task Feed */}
        <div className='p-4 roboto-slab bg-gray-900 flex flex-col rounded-lg gap-3'>
          <h1>Task Feed</h1>
        <TaskTile />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-72 bg-gray-900 border-l border-gray-800 p-6 hidden lg:flex flex-col gap-6">
        <div className="bg-black p-4 rounded-lg border border-gray-700 font-mono text-sm">
          <h3 className="text-green-400 mb-2">Snippet of the Day</h3>
          <pre className="text-gray-300">
{`const focus = () => {
  while(alive) {
    keepLearning();
  }
};`}
          </pre>
        </div>

        <div className="bg-black p-4 rounded-lg border border-gray-700 text-center">
          <h3 className="text-yellow-400 font-bold">Pomodoro</h3>
          <p className="text-2xl mt-2">25:00</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-full hover:opacity-80">
            Start
          </button>
        </div>
      <AddTask  />
      </aside>
    </div>
  );
};

