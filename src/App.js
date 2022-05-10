import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Contact from "./components/Contact"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      {/* <h1>Hello </h1> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
