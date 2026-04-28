import {useState } from "react"
import RequireCoffee from "./pages/home/RequireCoffee"
import './global.css'
import Brinde from "./pages/home/Brinde"

interface listCoffeeProps {
  id: number,
  coffe: string,
  acucar: boolean
}

function App() {

  const [listCoffe] = useState<listCoffeeProps[]>([
    {id: 1, coffe: 'Café expresso', acucar: false},
    {id: 2, coffe: 'Cappucino', acucar: true},
    {id: 3, coffe: 'Gray Coffee', acucar: false},
    {id: 4, coffe: 'American Choco', acucar: true},
  ])

  const [freebieWon, setFreebieWon] = useState<string>('')


  function freebie() {
    setFreebieWon(listCoffe[Math.floor(Math.random() * 4)].coffe)
  }
  


  
  return (
    <>

    <div id="container">
      {listCoffe.map((itemCoffee) => (
        <RequireCoffee key={itemCoffee.id} nameCoffee={itemCoffee.coffe} sugar={itemCoffee.acucar} />
      ))}
      <Brinde freebieFunction={freebie} />
      <p id="freebie-p">{freebieWon}</p>
    </div>


    </>
  )
}

export default App
