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
            <li className={styles.li_coffee}>{nameCoffee}</li>
            <li className={styles.li_coffee}>{sugar ? 'Com açucar' : 'Sem açucar'}</li>
        </ul>
    </section>
    </>
  )
}

export default RequireCoffee