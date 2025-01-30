import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventQuestions from './components/EventQuestions'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventQuestions />} />
        {/* <Route path="/events" element={<EventQuestions />} /> */}
      </Routes>
    </Router>
  )
}

export default App
