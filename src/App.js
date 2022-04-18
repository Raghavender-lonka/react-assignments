import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Student from "./components/Student"
import Contact from "./components/Contact"
import "./App.css"

import Navbar from "./components/Navbar.jsx"
import NotFound from "./components/NotFound"
// import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
