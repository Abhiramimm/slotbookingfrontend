import React from 'react'

function Header() {
  return (
  <div class="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-6">
                <div>
                    <h1 class="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        My Appointments
                    </h1>
                    <p class="text-slate-600 mt-1">Manage and track your upcoming appointments</p>
                </div>
                <button class="bg-gradient-to-r from-indigo-600 to-purple-600 text-green px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    <span class="flex items-center gap-2">
                        <svg class="w-5 h-5" fill="blue" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        New Appointment
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
