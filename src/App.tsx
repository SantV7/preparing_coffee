import { useState } from "react"
import RequireCoffee from "./pages/home/RequireCoffee"

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
  


  
  return (
    <>

    {listCoffe.map((itemCoffee) => (
      <RequireCoffee key={itemCoffee.id} nameCoffee={itemCoffee.coffe} sugar={itemCoffee.acucar} />
    ))}
     
    </>
  )
}

export default App
