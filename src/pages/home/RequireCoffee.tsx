interface requireCofffeeProps {
    nameCoffee: string,
    sugar: boolean
}




const RequireCoffee = ({ nameCoffee, sugar }: requireCofffeeProps) => {
  return (
    <>

    <section>
        <ul>
            <li>{nameCoffee}</li>
            <li>{sugar ? 'Com açucar' : 'Sem açucar'}</li>
        </ul>
    </section>
    
    </>
  )
}

export default RequireCoffee