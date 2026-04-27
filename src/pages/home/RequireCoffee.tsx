interface requireCofffeeProps {
  nameCoffee: string,
  sugar: boolean
}



import styles from './requireCoffee.module.scss'
const RequireCoffee = ({ nameCoffee, sugar }: requireCofffeeProps) => {
  return (
    <>

    <section className={styles.infoCoffee}>
        <ul>
            <li>{nameCoffee}</li>
            <li>{sugar ? 'Com açucar' : 'Sem açucar'}</li>
        </ul>
    </section>
    </>
  )
}

export default RequireCoffee