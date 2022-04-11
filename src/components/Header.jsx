import React from "react"
import "./Header.css"
function Header(props) {
  const { onshowFunc, onshowClass } = props
  return (
    <div className="heading-container">
      <h1 className="heading">Styling using Functional and Class Component</h1>

      <div className="btn-container">
        <button onClick={onshowFunc}>
          To see styling in Functional Component
        </button>
        <button onClick={onshowClass}>To see styling in Class Component</button>
      </div>
    </div>
  )
}

export default Header
