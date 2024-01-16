import DocCode from '../../components/DocCode'

const Home = () => {
  return (
    <>
      <h1>Bienvenido 👋</h1>
      <p>
        Muchas gracias por pasarte por aca, es un placer 💛.
   
        Este es mi portfolio, espero que te guste. Esta inspirado en lo que 
        mas leemos los desarrolladores, <b>documentacion</b>.
      </p>
      <p>
        Para conocer mas de mi tendras que leer y ejecutar uno que otro codigo en la "consola".
    
        No te preocupes que no sera nada complicado. Te ire guiando paso a paso 😉.
      </p>
      <p>
        Vamos a empezar! Prueba escribir el siguiente comando en la 
        consola y presiona <b>enter</b>.
      </p>
      <DocCode text='capitalEslovenia' />

      <p>Deberias ver la salida: Liubliana</p>

      <p><b>Para limpiar la consola usa:</b></p>
      <DocCode text='clear' />
    </>
  )
}

export default Home
