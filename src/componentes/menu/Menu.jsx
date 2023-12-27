import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaQuestionCircle, FaBell, FaCog } from 'react-icons/fa';
import { BsFillPersonPlusFill } from "react-icons/bs";
import './menu.css';

import logomenu from '../../assets/react.svg';
import logofinal from '../../assets/logfinal.png';
import * as Datatest from "../../pruebas/Datatest"

const Menu = () => {
    // Supongamos que tienes el nombre de usuario en una variable, por ejemplo:
    const username = "Hola , User test";

    
    const cerrarsesion = async () => {
        try {
            await Datatest.Logout()
        } catch (error) {
            console.log(error)
        } 
    }

    return (
        <section className="menu">


            <header>
                <img src={logofinal} alt="" />
                <h1 className="titulo-empresa">
                    <span className="company-initial">G</span>IR
                </h1>
                <h3> - Gestión Integrada de Riesgos</h3>
            </header>


            <nav className='navigator'>
                <div className="menu-icons">
                    <ul className="menu-lista">
                        <li className="menu__list__item itm0">
                            <Link to="/pregunta">
                                <BsFillPersonPlusFill />
                            </Link>
                        </li>
                        <li className="menu__list__item itm1">
                            <Link to="/dd" className='menu-user'>

                                <FaUser />
                                <span className="usuario-text">{username}</span>
                            </Link>
                        </li>

                        <li className="menu__list__item itm2">
                            <Link to="/pregunta">
                                <FaQuestionCircle />
                            </Link>
                        </li>

                        <li className="menu__list__item itm3">
                            <Link to="/notificacion">
                                <FaBell />
                            </Link>
                        </li>

                        <li className="menu__list__item itm4">
                            <Link to="/configuracion" onClick={cerrarsesion}>
                                <FaCog />
                
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Menu;
