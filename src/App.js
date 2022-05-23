import React, { useMemo } from "react"
import "./App.css"

const App = () => {
  const myFunction = useMemo(() => {
    return "there"
  })

  return <h1>Hi {myFunction}</h1>
}

export default App
