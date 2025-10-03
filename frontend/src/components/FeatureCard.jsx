import React from 'react'

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="text-indigo-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureCard