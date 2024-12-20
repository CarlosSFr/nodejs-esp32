import React from "react"

const Teste = () => {
  fetch("/api")
    .then(resposta => {
      console.log(resposta)
    })
}

export default function App() {
  return (
    <div>
      {Teste()}
      <h1>Hello World!</h1>

    </div>
  )
}