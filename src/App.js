import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Student from "./components/Student"
import Contact from "./components/Contact"
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import NotFound from "./components/NotFound"
import Addorupdate from "./components/Addorupdate"
import { StudentsData } from "./components/StudentsData"
// import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <StudentsData>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/addorupdate" element={<Addorupdate />} />
          <Route path="/addorupdate/:id" element={<Addorupdate />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </StudentsData>
    </div>
  )
}

export default App
