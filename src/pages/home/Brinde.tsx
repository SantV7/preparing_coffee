interface freebieProps {
    freebieFunction: () => void
    // o void, meio que nos diz que não está esperando retornar nada
}

const Brinde = ({freebieFunction}: freebieProps) => {
  return (
    <>
        <button onClick={freebieFunction}>Receber café de brinde</button>
    </>
  )
}

export default Brinde