import React from 'react'
import Navbar from '../components/Navbar'
import FeatureCard from "../components/FeatureCard"
import { WalletIcon, CheckSquareIcon, FolderKanbanIcon, GraduationCapIcon, HeartIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Landing() {

  const navigate = useNavigate()

  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4">
              Master Your Life. All In One Place.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Focus is the ultimate personal life management tool, designed to help you track your finances, manage your tasks, and conquer your goals with ease.
            </p>
            <button onClick={()=>navigate("/login")} className="bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-700">
              Get Started for Free
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Organize Your Entire World
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                From your budget to your weekend plans, Focus brings every aspect of your life together.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<WalletIcon />}
                title="Financial Tracking"
                description="Keep a clear overview of your income and expenses. Set budgets, track savings, and plan for your financial future."
              />
              <FeatureCard
                icon={<CheckSquareIcon />}
                title="Task Management"
                description="Organize your to-do list with powerful tools. Prioritize tasks, set deadlines, and feel the satisfaction of getting things done."
              />
              <FeatureCard
                icon={<FolderKanbanIcon />}
                title="Project & Workspaces"
                description="Manage complex projects with a simple Kanban board. Collaborate with others or work on your personal projects with ease."
              />
              <FeatureCard
                icon={<GraduationCapIcon />}
                title="College & Academics"
                description="Stay on top of your studies. Track assignments, manage class schedules, and organize your research all in one place."
              />
              <FeatureCard
                icon={<HeartIcon />}
                title="Personal Life"
                description="Plan your hobbies, track personal goals, and manage your health and fitness journey. Your personal life, perfectly organized."
              />
              <FeatureCard
                icon={<CheckSquareIcon />}
                title="Habit Tracker"
                description="Build positive habits with our intuitive habit tracker. Visualize your progress and stay motivated on your path to self-improvement."
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl italic text-gray-300">
                "Since using Focus, I've reduced my daily stress by 50%. I know exactly where my money is going, and my to-do list no longer feels overwhelming. It's truly a game-changer."
              </p>
              <div className="mt-6 flex items-center justify-center space-x-3">
                <img src="https://placehold.co/50x50/374151/D1D5DB?text=A" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-indigo-600"/>
                <span className="font-semibold text-gray-200">Jane Doe, Student</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Organized?</h2>
            <p className="text-lg text-gray-400 mb-8">Join thousands of others who are taking control of their lives with Focus.</p>
            <button onClick={()=>navigate("/login")} className="bg-indigo-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-700">
              Sign Up for Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2025 Focus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing