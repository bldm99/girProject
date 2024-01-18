import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './lateral.css';

//Componentes importados
import Inicio from '../inicio/Inicio';
import Riesgos from '../riesgos/Riesgos';
import Proceso from '../Procesos/Proceso';
import Dashboard from '../dashboard/Dashboard';
import Reportes from '../reportes/Reportes';
import Causas from '../causas_conse/Causas';
import { Controles } from '../controles/Controles';





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

import * as Authdtariesgo from '../../pruebas/Datatest'


const Lateral = ({ cambio }) => {

    const navigate = useNavigate();

    const cerrarsesion = Authdtariesgo.Logout

    const buscarRiesgos = Datariesgo.buscarRiesgos
    const [xriesgos, setXriesgos] = useState([])

    const buscarMacros= Datariesgo.BuscarMacroprocesosx
    const [allmacros, setAllmacros] = useState([])

    const allriesgosmacro = Datariesgo.allriesgosmacro
    const buscarRiesgosmacro = Datariesgo.BuscarMacroprocesosnet
    const [macroriesgos, setMacroriesgos] = useState([])

    useEffect(() => {
        const obtenerdata = async () => {
            try {

                //Revison ya que al renderizar rapido rapido solo carga uno
                await buscarRiesgos("6531d08612ec096c58717b97", setXriesgos)

                await allriesgosmacro("6531d08612ec096c58717b97", setMacroriesgos)
                //await buscarRiesgosmacro("6531d08612ec096c58717b97", setMacroriesgos)
                await buscarMacros("6531d08612ec096c58717b97", setAllmacros)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()

    }, []);

    //console.log(xriesgos)
    //console.log(allmacros)




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
                    <li id="inicio" onClick={() => cambio(<Causas />)}>
                        <FontAwesomeIcon icon={faHouseChimneyCrack} className="icon" />
                        Causas y Consecuencias
                    </li>

                    <li id="clientes" onClick={() => cambio(<Controles />)}>
                        <FontAwesomeIcon icon={faToolbox} className="icon" />
                        Controles y Mitigaciones
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                        Eventos
                    </li>
                    <li id="inicio" onClick={() => cambio(<Inicio />)}>
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                        Plan de Accion
                    </li>
                    <li id="inicio" onClick={() => cambio(
                        <Reportes
                        almacenriesgos={xriesgos}
                        almacenmacroriesgos={macroriesgos}
                        almacenmacros={allmacros}
                        />
                    )}>
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
                    <li id="configuracion" >
                        <FontAwesomeIcon icon={faCog} className="icon" />
                        Configuración
                    </li>
                    <li id="cerrar-sesion" onClick={() => { cerrarsesion(navigate) }}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                        Cerrar Sesión
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Lateral