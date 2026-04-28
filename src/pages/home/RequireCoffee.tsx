interface requireCofffeeProps {
  nameCoffee: string,
  sugar: boolean
}



import styles from './requireCoffee.module.scss'
const RequireCoffee = ({ nameCoffee, sugar }: requireCofffeeProps) => {

  return (
   <>
    <section className={styles.infoCoffee}>
        <ul className={styles.ul_style}>
            <li className={styles.li_coffee}>{nameCoffee} ☕</li>
            <li className={styles.li_coffee}>{sugar ? 'Com açucar 👌' : '❌ Sem açucar ❌'}</li>
        </ul>


        <div className={styles.descriptionCoffee}>
          
        </div>
    </section>
    </>
  )
}

export default RequireCoffee