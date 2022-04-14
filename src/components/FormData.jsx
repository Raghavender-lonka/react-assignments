import React from "react"
import "./Form.css"

function FormData(props) {
  return (
    <div className="user-data2">
      <h1>EMPLOYEE FEEDBACK DATA</h1>
      <div className="user-info-container">
        {props.onreceiveData.flat().map((info, index) => {
          return (
            <div key={index} className="user-info">
              Name: {info.name} | Department: {info.dept} | Rating:{" "}
              {info.rating}
            </div>
          )
        })}
      </div>
      <button type="submit" onClick={props.display}>
        Go Back
      </button>
    </div>
  )
}

export default FormData
