import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botao from './componentes/botao'
import Titulo from './componentes/titulo'
import Aluno from './componentes/aluno'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Titulo/>
          <Botao/>
      </div>
    </>
  )
}

export default App