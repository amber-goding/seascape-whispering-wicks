import { useState } from 'react'
import { Routes, Route, useLocation } from "react-router"
import Hero from './pages/Hero'
import './App.css'


function App() {


  return (
    <>
   <Routes>
					<Route path="/" element={<Hero />} />
    
   </Routes>
    </>
  )
}

export default App
