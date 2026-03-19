import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botao from './components/Botao'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import Atividade from './Aatividade'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Atividade/>
      </div>
    </>
  )
}

export default App