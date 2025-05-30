import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import AppointmentCreate from './components/AppointmentCreate'
import AppointmentList from './components/AppointmentList'
import Header from './components/Header'

function App() {
  return (
   <BrowserRouter>
   <Header></Header>
   <Routes>
    <Route path="signup" element={<Signup></Signup>}></Route>
    <Route path="" element={<Signin></Signin>}></Route>
    <Route path="appointment-create" element={<AppointmentCreate></AppointmentCreate>}></Route>
    <Route path="appointment-list" element={<AppointmentList></AppointmentList>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
