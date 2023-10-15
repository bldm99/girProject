import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './lateral.css';

//Componentes importados
import Inicio from '../inicio/Inicio';
import Riesgos from '../riesgos/Riesgos';
import Heatmap from '../headmap/Heatmap';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faBoxOpen, faUsers, faFileAlt, faChartBar, faBullhorn, faTags, faShoppingCart, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Lateral = ({cambio}) => {

    return (
        <section className='lateral' >

            <div className='sub-lateral'>

                <ul>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Inicio
                    </li>
                    <li id="procesos" onClick={() => cambio(<Pedidos />)}>
                        <FontAwesomeIcon icon={faClipboardList} className="icon" />
                        Procesos
                    </li>
                    <li id="productos" onClick={() => cambio(<Riesgos />)}>
                        <FontAwesomeIcon icon={faBoxOpen} className="icon" />
                        Riesgos
                    </li>
                    <li id="clientes" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        Controles
                    </li>
                    <li id="contenido" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faFileAlt} className="icon" />
                        Mapa de Calor
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