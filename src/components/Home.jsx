import React, { useContext } from "react"
import { Data } from "../store/Context"

export default function Home() {
  const [DataArray] = useContext(Data)

  return (
    <div>
      <h1>Student Data</h1>
      {DataArray.map((item) => {
        console.log(DataArray)
        return (
          <div key={item.id}>
            <h2>Name:{item.Name}</h2>
            <h2>Class:{item.studentClass}</h2>
            <h2>Info:{item.info}</h2>
          </div>
        )
      })}
    </div>
  )
}
// { students.map( (student,index)=>
//     // <Student key={index} name={student.Name} studentClass={student.studentClass} info={student.info}/>
//     <Student key={index} index={student.id} deleteStudent={deleteStudent} name={student.Name} studentClass={student.studentClass} info={student.info}/>
//  ) }
