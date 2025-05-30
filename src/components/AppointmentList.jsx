import React, { useEffect, useState } from 'react'
import { appointmentListApi } from '../services/Api'

function AppointmentList() {

    const [appointments, setAppointments] = useState(null)

    useEffect(() => { getAllAppointments() }, [])

    async function getAllAppointments() {

        let response = await appointmentListApi()

        if (response.status >= 200 && response.status < 300) {

            // console.log(response.data);

            setAppointments(response.data)
        }

        else {

            console.log("error", response);

        }
    }

    return (
 <div class="bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">
   

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       

        {/* <!-- Appointments List --> */}
        <div class="space-y-4">
            {/* <!-- Appointment Card 1 --> */}
             {appointments && appointments.map((a)=>(
                   <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">{a.name}</h3>
                            <p class="text-slate-600"></p>
                            <div class="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    {a.date}
                                </span>
                                <span class="flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    {a.time_slot}
                                </span>
                                <span class="flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    </svg>
                                    Medical Center
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Upcoming</span>
                        <div class="flex space-x-2">
                            <button class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                            </button>
                            <button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             ))}



            {/* <!-- Load More Button --> */}
            <div class="text-center pt-8">
                <button class="px-8 py-3 bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200 font-medium">
                    Load More Appointments
                </button>
            </div>
        </div>
    </div>


</div>
    )
}

export default AppointmentList
