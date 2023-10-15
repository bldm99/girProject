import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

//Componentes importados
import Menu from './componentes/menu/Menu'
import Cuerpo from './componentes/cuerpo/Cuerpo'
import Login from './componentes/login/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route>
          <Route path="/*" element={<><Menu /><Cuerpo/></>} />
        </Route>
        <Route>
          <Route path="/login" element={<><Login /></>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
