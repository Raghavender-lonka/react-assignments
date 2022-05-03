import { useContext } from "react"
import { Link } from "react-router-dom"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { ContextData } from "./StudentsData"
import "./Student.css"

export default function Student() {
  const [data] = useContext(ContextData)
  // console.log(data)

  return (
    <div className="tableData">
      <div className="tableData-head">
        <h1>Students Details</h1>

        <Link to={`/students-desc`} className="button">
          Add new student
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Batch</TableCell>
              <TableCell align="right">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.batch}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Link to={`/students-desc/${row.id}`}>Edit</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
