import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './lateral.css';

//Componentes importados
import Inicio from '../inicio/Inicio';
import Riesgos from '../riesgos/Riesgos';
import Proceso from '../Procesos/Proceso';
import Dashboard from '../dashboard/Dashboard';





//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome, faClipboardList, faBoxOpen, faUsers, faFileAlt,
    faChartBar, faBullhorn, faTags, faShoppingCart, faCog,
    faSignOutAlt, faGripVertical, faTriangleExclamation,
    faHouseChimneyCrack, faToolbox, faCalendar, faScrewdriverWrench,
    faListCheck, faLocationCrosshairs, faFilePen, faFire
} from '@fortawesome/free-solid-svg-icons';


import * as Datariesgo from '../../utils/Datariesgo'

const Lateral = ({ cambio }) => {

    const buscarRiesgos = Datariesgo.buscarRiesgos
    const [xriesgos, setXriesgos] = useState([])

    useEffect(() => {
        const obtenerdata = async () => {
            try {
                const riesgos = await buscarRiesgos("6531d08612ec096c58717b97", setXriesgos)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()

    }, []);

    console.log(xriesgos)




    return (
        <section className='lateral' >

            <div className='sub-lateral'>

                <ul>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Inicio
                    </li>
                    <li id="inicio" onClick={() => cambio(
                        <Dashboard
                            almacenriesgos={xriesgos}
                        />
                    )}>
                        <FontAwesomeIcon icon={faGripVertical} className="icon" />
                        Dashboard
                    </li>
                    <li id="proceso" onClick={() => cambio(<Proceso />)}>

                        <FontAwesomeIcon icon={faClipboardList} className="icon" />
                        Procesos
                    </li>
                    <li id="productos" onClick={() => cambio(
                        <Riesgos
                            almacenriesgos={xriesgos}
                        />
                    )}>
                        <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
                        Riesgos
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faHouseChimneyCrack} className="icon" />
                        Causas y Consecuencias
                    </li>

                    <li id="clientes" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faToolbox} className="icon" />
                        Controles
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                        Eventos
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                        Plan de Accion
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faListCheck} className="icon" />
                        Reportes
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faLocationCrosshairs} className="icon" />
                        Indicadores
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faFilePen} className="icon" />
                        Evaluaciones
                    </li>
                    <li id="contenido" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faFire} className="icon" />
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