import React, { useState } from "react"
import "./Form.css"
// import FormData from "./FormData"

function Form() {
  let [userName, setUserName] = useState("")
  let [userDept, setUserDept] = useState("")
  let [userRating, setUserRating] = useState("")
  let [data, setData] = useState([])
  // let [displayData, setDisplayData] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    data.push({
      name: userName,
      dept: userDept,
      rating: userRating,
    })
    setData(data)
    // setDisplayData(true)
    setUserName("")
    setUserDept("")
    setUserRating("")
    // console.log(data)
  }

  return (
    <>
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="department">Department :</label>
          <input
            type="text"
            id="department"
            name="department"
            value={userDept}
            onChange={(e) => setUserDept(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="rating">Rating :</label>
          <input
            type="number"
            value={userRating}
            onChange={(e) => setUserRating(e.target.value)}
          />
          <br />
          <br />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="user-data">
        <div className="user-info-container">
          {data.map((info, index) => {
            return (
              <div key={index} className="user-info">
                Name: {info.name} | Department: {info.dept} | Rating:{" "}
                {info.rating}
              </div>
            )
          })}
        </div>
      </div>
      {/* <FormData onreceiveData={data} /> */}
    </>
  )
}

export default Form
