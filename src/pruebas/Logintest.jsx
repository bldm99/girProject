import React, { useState } from 'react'

import * as Datatest from "./Datatest"
import Imputx from '../componentes/imputx/Imputx'


export const Logintest = () => {

    const [email ,setEmail] = useState("test@gmail.com")
    const [password ,setPassword] = useState("123456")

    const Logearse = async (event) => {
        event.preventDefault() 
        try {
            await Datatest.Login(email,password)
        } catch (error) {
            console.log(error)
        } 
    }

    const but = async () => {
        try {
            await Datatest.Protegido()
        } catch (error) {
            console.log(error)
        } 
    }

    const cerrarsesion = async () => {
        try {
            await Datatest.Logout()
        } catch (error) {
            console.log(error)
        } 
    }

    const verificar = async () => {
        try {
            await Datatest.verirefreshtoken()
        } catch (error) {
            console.log(error)
        } 
    }



  return (
    <div>
        <h1>Login Test</h1>

        <div>
            <form onSubmit={Logearse}>
             
                <Imputx
                    xlabel={"Email"}
                    xoutline={"#e65100"}
                    valor={email}
                    xplaceholder={"user@gmail.com"}
                    obligatorio={true}
                    actualizarvalor={setEmail}
                    tipo={'input'}
                />
                <Imputx
                    xlabel={"Password"}
                    xoutline={"#e65100"}
                    valor={password}
                    xplaceholder={"******"}
                    obligatorio={true}
                    actualizarvalor={setPassword}
                    tipo={'input'}
                />

                <button>Logearse</button>
            </form>
        </div>

        <button  onClick={but}>Ver datos de pagina protegida</button>
        <button  onClick={cerrarsesion}>Cerrar sesion</button>
        <button  onClick={verificar}>Verificar</button>
    </div>
  )
}
