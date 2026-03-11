import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoasVindas from '../../my-a/src/components/BoasVindas'

function App(){
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bem vindo ao grupo de estudo</h1>
        <Classroom/>
      </div>
    </>
  )
}

export default App
