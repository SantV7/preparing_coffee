import { useState } from "react"

interface listCoffeeProps {
  id: number,
  coffe: string,
  acucar: boolean
}

function App() {

  const [listCoffe] = useState<listCoffeeProps[]>([
    {id: 1, coffe: 'Café expresso', acucar: false},
    {id: 2, coffe: 'Cappucino', acucar: true},
  ])
  
 console.log(listCoffe)

  return (
    <>
     
    </>
  )
}

export default App
