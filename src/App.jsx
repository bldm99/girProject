import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navigate, useNavigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

//Componentes importados
import Menu from './componentes/menu/Menu'
import Cuerpo from './componentes/cuerpo/Cuerpo'
import Login from './componentes/login/login'
import Imputx from './componentes/imputx/Imputx'
import Calor from './componentes/calor/Calor'
import Pruebas from './pruebas/Pruebas'
import { Logintest } from './pruebas/Logintest'
import Cookies from 'js-cookie'
import { CookiesProvider, useCookies } from 'react-cookie';


import * as Datatest from "././pruebas/Datatest"

const PrivateWrapperGir = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await Datatest.verirefreshtoken(setIsAuthenticated, navigate);
      } catch (error) {
        console.error('Error al verificar la autenticación:', error);
      }
    };

    checkAuthentication();
  }, [navigate]);

  if (isAuthenticated) {
    //console.log(isAuthenticated);
    return <Outlet />;
  } 

};


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*<Route>
          <Route path="/*" element={<><Menu /><Cuerpo /></>} />
        </Route>*/}
        <Route element={<PrivateWrapperGir />} >
          <Route path="/*" element={<><Menu /><Cuerpo /></>} />
      </Route>


        <Route>
          <Route path="/login" element={<><Login /></>} />
        </Route>

        <Route>
          <Route path="/pruebas" element={<><Logintest /></>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App