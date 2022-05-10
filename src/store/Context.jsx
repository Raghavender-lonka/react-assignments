import React, { createContext, useState } from "react"

export const Data = createContext()

export const DataContext = (props) => {
  const [array, setArray] = useState([
    {
      Name: "Ravi",
      studentClass: "X",
      info: "Nulla ea velit dolore excepteur consectetur incididunt tempor eiusmod commodo.",
      id: "1",
    },
    {
      Name: "Raj",
      studentClass: "XI",
      info: "Occaecat laboris ea sunt do velit.",
      id: "2",
    },
    {
      Name: "Kumar",
      studentClass: "XII",
      info: "Labore culpa pariatur esse sint non do in dolore commodo.",
      id: "3",
    },
  ])
  return (
    <Data.Provider value={[array, setArray]}>{props.children}</Data.Provider>
  )
}
