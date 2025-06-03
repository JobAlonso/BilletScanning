import { useEffect, useState } from 'react'
import axios from 'axios'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/saludo/')  // Usa tu IP del servidor si React corre en otra máquina
      .then(res => {
        setMensaje(res.data.mensaje)
      })
      .catch(err => {
        console.error(err)
        setMensaje('Error al conectar con la API')
      })
  }, [])

  return (
    <div>
      <h1>{mensaje}</h1>
    </div>
  )
}

export default App
