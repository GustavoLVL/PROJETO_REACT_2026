import { useState } from 'react'
import './App.css'

// 1. Corrigindo os caminhos das importações
import BoasVindas from './components/BoasVindas'
import Aluno from './components/Aluno'
import Botao from './components/Botao'
import Titulo from './components/Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* 2. Usando os componentes com a primeira letra MAIÚSCULA */}
        <BoasVindas /> 
        
        <h1>Bem vindo ao grupo de estudo</h1>
        <Aluno /> 
        
        <h1>Olha o nosso Botão</h1>
        <Botao />
        
        <h1>Veja os nossos títulos</h1>
        <Titulo />
      </div>
    </>
  )
}

export default App