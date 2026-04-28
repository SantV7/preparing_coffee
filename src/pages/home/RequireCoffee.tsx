interface requireCofffeeProps {
  nameCoffee: string,
  description: string,
  sugar: boolean
}


import styles from './requireCoffee.module.scss'
const RequireCoffee = ({ nameCoffee, description ,sugar }: requireCofffeeProps) => {

  return (
   <>
    <section className={styles.infoCoffee}>
        <ul className={styles.ul_style}>
            <li id={styles.title_coffee} className={styles.li_coffee}>{nameCoffee} ☕</li>
            <li className={styles.li_coffee}>{sugar ? 'Com açucar 👌' : 'Sem açucar ❌'}</li>
        </ul>


        <div className={styles.description_coffee}>
          <p>{description}</p>
          
        </div>
    </section>
    </>
  )
}

export default RequireCoffee