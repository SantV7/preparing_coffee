import {useState } from "react"
import RequireCoffee from "./pages/home/RequireCoffee"
import './global.css'
import Brinde from "./pages/home/Brinde"

interface listCoffeeProps {
  id: number,
  coffe: string,
  description: string,
  acucar: boolean
}

function App() {

  const [listCoffe] = useState<listCoffeeProps[]>([
    {id: 1, coffe: 'Café expresso', description: 'a' ,acucar: false},
    {id: 2, coffe: 'Cappucino', description: 'a' ,acucar: true},
    {id: 3, coffe: 'Gray Coffee', description: 'a' ,acucar: false},
    {id: 4, coffe: 'American Choco', description: 'a' ,acucar: true},
  ])

  const [freebieWon, setFreebieWon] = useState<string>('')


  function freebie() {
    setFreebieWon('Você ganhou um ' + listCoffe[Math.floor(Math.random() * 4)].coffe + ' de brinde🥳🎈')
  }
  


  
  return (
    <>

    <div id="container">
      <div className="flex-coffees">
        {listCoffe.map((itemCoffee) => (
          <RequireCoffee key={itemCoffee.id} nameCoffee={itemCoffee.coffe} description={itemCoffee.description} sugar={itemCoffee.acucar} />
        ))}
      </div>
      
      <Brinde freebieFunction={freebie} />
      <p id="freebie-p">{freebieWon}</p>
    </div>


    </>
  )
}

export default App
