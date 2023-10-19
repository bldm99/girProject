//import React from 'react';
//import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './lateral.css';

//Componentes importados
import Inicio from '../inicio/Inicio';
import Riesgos from '../riesgos/Riesgos';


//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faBoxOpen, faUsers, faFileAlt,
     faChartBar, faBullhorn, faTags, faShoppingCart, faCog, 
     faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import Proceso from '../Procesos/Proceso';

const Lateral = ({cambio}) => {

    return (
        <section className='lateral' >

            <div className='sub-lateral'>

                <ul>
                <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Inicio
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        <FontAwesomeIcon icon="fa-solid fa-gauge" style={{color: "#e0e2e5",}} />
                        Dashboard
                    </li>
                    <li id="proceso" onClick={() => cambio(<Proceso />)}>

                        <FontAwesomeIcon icon={faClipboardList} className="icon" />
                        Procesos
                    </li>
                    <li id="productos" onClick={() => cambio(<Riesgos />)}>
                        <FontAwesomeIcon icon={faBoxOpen} className="icon" />
                        Riesgos
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Causas y Consecuencias
                    </li>
                    
                    <li id="clientes" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        Controles
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Eventos
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Plan de Accion
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Reportes
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Indicadores
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Evaluaciones
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