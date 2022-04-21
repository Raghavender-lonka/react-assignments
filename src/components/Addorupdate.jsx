import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ContextData } from "./StudentsData"
import "./Student.css"

const Addorupdate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useContext(ContextData)
  const [details, setDetails] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
    id: "",
  })

  useEffect(() => {
    data.forEach((item) => {
      if (item.id === id) {
        //checking for existing id and set details of it
        // console.log(item.id, id)
        setDetails({
          name: item.name,
          age: item.age,
          course: item.course,
          batch: item.batch,
        })
      }
    })
  }, [data, id])

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value }) // update the details
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (id === undefined) {
      //check for new entries
      let newDetails = {
        ...details,
        id: Math.floor(Math.random() * 10000).toString(),
      }
      setData([...data, newDetails]) // adding new details
    } else {
      setData((prevState) =>
        prevState.map((student) =>
          student.id === id
            ? {
                id: id,
                name: details.name, // updating existing details
                age: details.age,
                course: details.course,
                batch: details.batch,
              }
            : student
        )
      )
    }
    navigate("/students")
  }

  return (
    <Box>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputRow">
          <TextField
            label="Name"
            variant="outlined"
            margin="dense"
            id="name"
            type="text"
            name="name"
            required
            value={details.name}
            onChange={handleChange}
            className="input"
          />

          <TextField
            label="Age"
            variant="outlined"
            margin="dense"
            id="age"
            type="number"
            name="age"
            required
            value={details.age}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputRow">
          <TextField
            label="Course"
            variant="outlined"
            margin="dense"
            id="course"
            type="text"
            name="course"
            required
            value={details.course}
            onChange={handleChange}
            className="input"
          />

          <TextField
            label="Batch"
            variant="outlined"
            margin="dense"
            id="batch"
            type="text"
            name="batch"
            required
            value={details.batch}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="buttonContainer">
          {" "}
          <Link to="/students" className="link">
            <button className="button cancel">Cancel</button>
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </div>
      </form>
    </Box>
  )
}

export default Addorupdate
