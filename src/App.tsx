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
    {id: 1, coffe: 'Café expresso', description: 'O clássico em sua forma mais pura. Este expresso é para quem aprecia a intensidade do grão torrado e o corpo denso do café. Com notas levemente amendoadas e uma acidez equilibrada, ele entrega o "puro suco" de energia para começar o dia com o pé direito. Sem distrações, apenas café de verdade.' ,acucar: false},
    {id: 2, coffe: 'Cappucino', description: 'A combinação perfeita entre o vigor do café e a cremosidade do leite vaporizado. Finalizado com uma camada generosa de espuma, esta versão já vem adoçada na medida certa para realçar o sabor do chocolate e da canela que compõem a receita tradicional. É o abraço quente que você merece no meio da tarde.' ,acucar: true},
    {id: 3, coffe: 'Gray Coffee', description: 'A combinação perfeita entre o vigor do café e a cremosidade do leite vaporizado. Finalizado com uma camada generosa de espuma, esta versão já vem adoçada na medida certa para realçar o sabor do chocolate e da canela que compõem a receita tradicional. É o abraço quente que você merece no meio da tarde.' ,acucar: false},
    {id: 4, coffe: 'American Choco', description: 'O melhor dos dois mundos. Imagine um café americano (mais suave e longo) fundido com a indulgência de um chocolate quente cremoso. Esta bebida é doce, reconfortante e levemente aveludada. É a escolha ideal para quem quer o sabor do chocolate com o "punch" de cafeína de um café filtrado de alta qualidade.' ,acucar: true},
  ])

  const [freebieWon, setFreebieWon] = useState<string>('')


  function freebie() {
    if(freebieWon === '') {
      setFreebieWon('Você ganhou um ' + listCoffe[Math.floor(Math.random() * 4)].coffe + ' de brinde🥳🎈')
    } else {
      return freebieWon
    }
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
