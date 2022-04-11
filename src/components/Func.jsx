import React from "react"
import "./Func.css"

function Func() {
  return (
    <div className="funcDiv">
      <h1>This is created using functional Component</h1>
      <p>This is done using external Css</p>
      <p style={{ color: "yellow" }}>This is done using inline CSS</p>
    </div>
  )
}

export default Func
