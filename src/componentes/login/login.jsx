import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

import * as Authdata from '../../utils/Authdatariesgo'
import Imputx from '../imputx/Imputx';


const Login = () => {
    const navigate = useNavigate();

    const Loginr = Authdata.Loginr

    const [email, setEmail] = useState("test@gmail.com")
    const [password, setPassword] = useState("123456")

    const miLogin = async (event) => {
        event.preventDefault()
        try {
            await Loginr(email, password, navigate)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='bodylogin'>

            <div className="containerl" id="container">
                <div className="form-container sign-up">
                    <form  >
                        <h1>Crear un nuevo usuario</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>Usa tu correo electronico para registrarte</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button >Iniciar Sesión</button>
                    </form>

                </div>
                <div className="form-container sign-in">
                    <form onSubmit={miLogin} >
                        <h1>GIR - Gestión Integrada de Riesgos</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-tiktok"></i></a>
                        </div>
                        <span>Digita tu correo electronico y tu contraseña</span>
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
                        <a href="#">Olvidaste tu contraseña?</a>
                        <button>Iniciar Sesión</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-right">
                            <h1>Hola de nuevo!</h1>
                            <p>Regístrese con sus datos personales para utilizar todas las funciones del sitio</p>
                            <button className="hidden" id="register">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default Login;
