import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import AppointmentCreate from './components/AppointmentCreate'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="signup" element={<Signup></Signup>}></Route>
    <Route path="" element={<Signin></Signin>}></Route>
    <Route path="appointment-create" element={<AppointmentCreate></AppointmentCreate>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
