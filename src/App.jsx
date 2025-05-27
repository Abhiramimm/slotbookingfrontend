import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="signup" element={<Signup></Signup>}></Route>
    <Route path="" element={<Signin></Signin>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
