import React, { useState } from 'react'

import { getTokenApi } from '../services/Api'

import { useNavigate } from 'react-router-dom'


function Signin() {

    const [user,setUser]=useState({username:"",password:""})

    const navigate=useNavigate()

   async function handleSubmit(event){

        event.preventDefault()

        console.log(user)

        let response=await getTokenApi(user)

        if(response.status>=200 && response.status<300){

            console.log(response.data)

            let authToken="Token "+response.data.token

            localStorage.setItem("token",authToken)
            
            navigate("appointment-create")
        }

    }

  return (
    <div class="bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-purple min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-md">
        {/* <!-- Logo/Brand --> */}
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                <i class="fas fa-calendar-check text-2xl text-brand-indigo"></i>
            </div>
            <h1 class="text-3xl font-bold text-white">AppointMe</h1>
            <p class="text-blue-100 mt-2">Welcome back! Sign in to your account</p>
        </div>

        {/* <!-- Login Form Container --> */}
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* <!-- Header --> */}
            <div class="bg-gradient-to-r from-brand-indigo to-brand-purple p-6 text-center">
                <h2 class="text-2xl font-bold text-white">Sign In</h2>
                <p class="text-blue-100 mt-1">Access your appointment dashboard</p>
            </div>

            {/* <!-- Login Form --> */}
            <div class="p-8">
                <form class="space-y-6" onSubmit={handleSubmit}>
                                        <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fas fa-user text-gray-400"></i>
                            </div>
                            <input 
                                value={user.username}
                                onChange={(e)=>setUser({...user,username:e.target.value})}
                                type="text" 
                                class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-indigo focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    </div>
                

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fas fa-lock text-gray-400"></i>
                            </div>
                            <input 
                                value={user.password}
                                onChange={(e)=>setUser({...user,password:e.target.value})}
                                type="password" 
                                id="loginPassword"
                                class="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-indigo focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                placeholder="Enter your password"
                                required
                            />
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <button type="button" class="text-gray-400 hover:text-gray-600 focus:outline-none" onclick="togglePassword('loginPassword', this)">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                    </div>

          

                  

                    <button 
                        type="submit" 
                        class="w-full bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-semibold py-3 px-4 rounded-lg hover:from-brand-purple hover:to-brand-indigo transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                        <i class="fas fa-sign-in-alt mr-2"></i>
                        SignIn
                    </button>

                 

                    {/* <!-- Link to Signup --> */}
                    <div class="text-center pt-4 border-t border-gray-200">
                        <p class="text-sm text-gray-600">
                            Already  have an account? 
                            <a href="signup.html" class="font-semibold text-brand-indigo hover:text-brand-purple transition-colors duration-200">
                                SignUp here
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>

        {/* <!-- Footer --> */}
        <div class="text-center mt-6 text-blue-100 text-sm">
            <p>&copy; 2024 AppointMe. All rights reserved.</p>
        </div>
    </div>

</div>
  )
}

export default Signin
