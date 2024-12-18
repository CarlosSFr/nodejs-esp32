import React from "react"

const server = () => {
  fetch("/api")
    .then(resposta => {
      console.log(resposta)
    })
}

export default function App() {
  return (
    <div>
      <h1>"Hello World!"</h1>
      {server()}
    </div>
  )
}