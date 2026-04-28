interface freebieProps {
    freebieFunction: () => void
    // o void, meio que nos diz que não está esperando retornar nada
}


import './brind.css'
const Brinde = ({freebieFunction}: freebieProps) => {
  return (
    <>
        <button id='btn_freebie' onClick={freebieFunction}>Receber café de brinde</button>
    </>
  )
}

export default Brinde