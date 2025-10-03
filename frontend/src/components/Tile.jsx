import React from 'react'

function Tile({title}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-lg font-bold mb-4">{title}</h2>
          <ul className="space-y-3 font-mono text-sm">
            <li className="text-green-400">✔ Task "API Fix" marked as complete</li>
            <li className="text-yellow-400">⚡ Commit synced to repo @12:32PM</li>
            <li className="text-purple-400">🤖 AI suggested refactor for Dashboard.jsx</li>
          </ul>
        </div>
  )
}

export default Tile