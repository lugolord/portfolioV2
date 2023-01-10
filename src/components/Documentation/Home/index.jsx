import DocCode from '../DocCode'

const Home = () => {
  return (
    <>
      <h1>Bienvenido 👋</h1>
      <p>
        Muchas gracias por pasarte por aca, es un placer 💛.
      </p>
      <p>
        Este es mi portfolio, espero que te guste. No es como la mayoria,
        esta inspirado en lo que mas leemos los desarrolladores, <b>documentacion</b>.
      </p>
      <p>
        Para conocer mas de mi tendras que leer y ejecutar uno que otro codigo en la "consola"
        que tienes arriba a la derecha ↗.
      </p>
      <p>No te preocupes que no sera nada complicado. Te ire guiando paso a paso 😉.</p>
      <p>
        Vamos a empezar! Prueba escribir el siguiente comando en la 
        consola (asegurate de presionar <b>enter</b>):
        </p>
      <DocCode text='capitalEslovenia' type='code' />
      <p>Deberias ver en la parte inferior derecha la salida:</p>
      <DocCode text='Liubliana' />
      <p />
      <p><b>Para limpiar la consola usa:</b></p>
      <DocCode text='clear' type='code' />
    </>
  )
}

export default Home
