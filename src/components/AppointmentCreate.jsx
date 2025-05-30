import React, { useState } from 'react'
import { createAppointmentApi, freeSlotsApi} from '../services/Api';
import { useNavigate } from 'react-router-dom';



function AppointmentCreate() {

    const navigate=useNavigate()

    const TIME_SLOT_CHOICES = [

        ['10:00-10:30', '10:00 AM - 10:30 AM'],
        ['10:30-11:00', '10:30 AM - 11:00 AM'],
        ['11:00-11:30', '11:00 AM - 11:30 AM'],
        ['11:30-12:00', '11:30 AM - 12:00 PM'],
        ['12:00-12:30', '12:00 PM - 12:30 PM'],
        ['12:30-13:00', '12:30 PM - 1:00 PM'],
        ['14:00-14:30', '2:00 PM - 2:30 PM'],
        ['14:30-15:00', '2:30 PM - 3:00 PM'],
        ['15:00-15:30', '3:00 PM - 3:30 PM'],
        ['15:30-16:00', '3:30 PM - 4:00 PM'],
        ['16:00-16:30', '4:00 PM - 4:30 PM'],
        ['16:30-17:00', '4:30 PM - 5:00 PM'],

    ]

    const [appointment, setAppointment] = useState({ name: "", phone_number: "", date: "", time_slot: null })

    const[availableSlots,setAvailableSlots]=useState(null)

    async function handleSubmit(event) {

        event.preventDefault()

        console.log(appointment);

        let response=await createAppointmentApi(appointment)

        if(response.status>=200 && response.status<300){

            console.log(response.data);
            
            navigate("/appointment-list")
        }
        
        else{

            console.log("failed",response);
            
        }
    }

    async function handleDateChange(event){

        event.preventDefault()

        console.log(event.target.value);

        let selectedDate=event.target.value

        let response=await freeSlotsApi(selectedDate)

        if(response.status>=200 && response.status<300){

            console.log(response.data);

            setAvailableSlots(response.data)
            
        }

        else{

            console.log("failed",response);
            
        }
        
    }

    return (
        <div class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div class="mb-6">
                    <h1 class="text-2xl font-bold text-gray-800 mb-2">Book Your Appointment</h1>
                    <p class="text-gray-600">Please fill in the form below to schedule your appointment.</p>
                </div>

                <form onSubmit={handleSubmit} id="bookingForm" class="space-y-5">
                    {/* <!-- Date Selection --> */}
                    <div>
                        <label for="appointmentDate" class="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                        <input
                            value={appointment.date}
                            onChange={(e) =>{
                                setAppointment({ ...appointment, date: e.target.value });
                                handleDateChange(e)

                            }}
                            type="date" id="appointmentDate" name="appointmentDate"
                            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required />
                    </div>

                    {/* <!-- Time Slot Selection --> */}
                    <div>
                        <label for="timeSlot" class="block text-sm font-medium text-gray-700 mb-1">Select Time Slot</label>
                        <select
                            value={appointment.time_slot}
                            onChange={(e) => setAppointment({ ...appointment, time_slot: e.target.value })}
                            id="timeSlot" name="timeSlot"
                            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                            <option value="" disabled selected>Choose a time slot</option>
                            {availableSlots&&availableSlots.map((ch) => <option value={ch.slot_id}>{ch.slot_display}</option>)}
                        </select>
                    </div>

                    {/* <!-- Contact Information --> */}
                    <div class="space-y-5">
                        <div>
                            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                value={appointment.name}
                                onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                                type="text" id="fullName" name="fullName"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>


                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                value={appointment.phone_number}
                                onChange={(e) => setAppointment({ ...appointment, phone_number: e.target.value })}
                                type="tel" id="phone" name="phone"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>
                    </div>


                    {/* <!-- Submit Button --> */}
                    <div>
                        <button type="submit"
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Book Appointment
                        </button>
                    </div>
                </form>

                {/* <!-- Confirmation Message (Initially Hidden) --> */}
                <div id="confirmationMessage" class="hidden mt-6 p-4 bg-green-100 text-green-700 rounded-md">
                    <p class="font-medium">Your appointment has been scheduled!</p>
                    <p class="text-sm mt-1">We've sent a confirmation to your email.</p>
                </div>
            </div>


        </div>
    )
}

export default AppointmentCreate
