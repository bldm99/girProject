//import React from 'react';
//import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './lateral.css';
import Inicio from '../inicio/Inicio';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faBoxOpen, faUsers, faFileAlt, faChartBar, faBullhorn, faTags, faShoppingCart, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Proceso from '../Procesos/Proceso';

const Lateral = ({cambio}) => {

    return (
        <section className='lateral' >

            <div className='sub-lateral'>

                <ul>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        General
                    </li>
                    <li id="proceso" onClick={() => cambio(<Proceso />)}>
                        <FontAwesomeIcon icon={faClipboardList} className="icon" />
                        Procesos
                    </li>
                    <li id="productos" onClick={() => cambio(<Productos />)}>
                        <FontAwesomeIcon icon={faBoxOpen} className="icon" />
                        Riesgos
                    </li>
                    <li id="clientes" onClick={() => cambio(<Clientes />)}>
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        Reportes
                    </li>
                    <li id="contenido" onClick={() => cambio(<Contenido />)}>
                        <FontAwesomeIcon icon={faFileAlt} className="icon" />
                        Smurfcat
                    </li>
                    <li id="estadisticas">
                        <FontAwesomeIcon icon={faChartBar} className="icon" />
                        Informe de estadística
                    </li>
                    <li id="marketing" onClick={() => cambio(<Html />)}>
                        <FontAwesomeIcon icon={faBullhorn} className="icon" />
                        Marketing
                    </li>
                    <li id="descuentos">
                        <FontAwesomeIcon icon={faTags} className="icon" />
                        Descuentos
                    </li>
                    <li id="tienda-online" onClick={() => cambio(<Test />)}>
                        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                        Ver tu Tienda Online
                    </li>
                    <li id="personalizar-tienda">
                        <Link to="/administrar">
                            <FontAwesomeIcon icon={faCog} className="icon" />
                            Personalizar Tienda
                        </Link>
                    </li>
                    <li id="configuracion" onClick={() => cambio(<Testcliente />)}>
                        <FontAwesomeIcon icon={faCog} className="icon" />
                        Configuración
                    </li>
                    <li id="cerrar-sesion" onClick={() => { cerrarSesion2() }}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                        Cerrar Sesión
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Lateral