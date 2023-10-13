import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./menu.css";

import logomenu from '../../assets/react.svg'

const Menu = () => {

    return (
        <section className="menu">
            <Link to={'/'}>
                <header>

                    <img src={logomenu} alt="" />
                    <h1 className="titulo-empresa">GIR</h1>

                </header>
            </Link>

            
            <nav className='navigator'>
                <ul className="menu-lista">

                    <li className="menu__list__item itm1">
                        <Link to="/dd">usuario</Link>
                        

                    </li>

                    <li className="menu__list__item itm1">
                        <Link to="/djfsdf">Planes</Link>
                       

                    </li>
                    <li className="menu__list__item itm3">
                        <Link to="/sobre">Ofertas Especiales</Link>
                       
                    </li>
                </ul>
            </nav>
        </section >
    );
}

export default Menu;