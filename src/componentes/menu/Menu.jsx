import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaQuestionCircle, FaBell, FaCog } from 'react-icons/fa';
import './menu.css';

import logomenu from '../../assets/react.svg';

const Menu = () => {
    // Supongamos que tienes el nombre de usuario en una variable, por ejemplo:
    const username = "UsuarioEjemplo";

    return (
        <section className="menu">
            
                
                <header>
                    <img src={logomenu} alt="" />
                    <h1 className="titulo-empresa">
                        <span className="company-initial">G</span>IR
                    </h1>
                </header>
          

            <nav className='navigator'>
                <div className="menu-icons">
                    <ul className="menu-lista">
                        <li className="menu__list__item itm1">
                            <Link to="/dd">
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
                            <Link to="/configuracion">
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
