import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

//Componentes importados
import Menu from './componentes/menu/Menu'
import Cuerpo from './componentes/cuerpo/Cuerpo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route>
          <Route path="/*" element={<><Menu /><Cuerpo/></>} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App