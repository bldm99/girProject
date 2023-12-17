import React, { useState, useEffect, useContext } from 'react';
import './riesgos.css'

import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import Descripcionr from './Descripcionr/Descripcionr';
import Tabla from './tabalr/Tabla';
import Despacho from './despacho/Despacho';
import Formularior from './formularior/Formularior';

import * as Datariesgo from '../../utils/Datariesgo'

//Toast aviso emergente
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NombreContext } from '../../utils/Context';

const Riesgos = (props) => {

    const FormData = useContext(NombreContext)
    const { macroSeleccionados, borrarData , causaSeleccionados } = FormData
    //console.log(macroSeleccionados)
    console.log(causaSeleccionados)




    //Datos enviados del componente padre Lateral 
    const { almacenriesgos } = props



    const buscarRiesgos = Datariesgo.buscarRiesgos
    const postRiesgos = Datariesgo.postRiesgos
    const pushMacro = Datariesgo.pushMacro

    const [datariesgos, setDatariesgos] = useState([])




    //Mostrar y ocultar descripcion
    const [mostrarDesc, setMostarDesc] = useState(false)

    const Desplegar = () => {
        setMostarDesc(!mostrarDesc)
    }

    //Formulario de registro modal
    const [modalVisible, setModalVisible] = useState(false);

    const registrar = () => {
        setModalVisible(true);
    };

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modalBldm")) {
            setModalVisible(false);
            borrarData()
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        const obtenerdata = async () => {
            try {
                //const riesgos = await buscarRiesgos("6531d08612ec096c58717b97", setDatariesgos)
                setDatariesgos(almacenriesgos)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    //efectuar registro de nuevo riesgo
    const registroRiesgo = async (dato) => {

        //const causasSinId = causaSeleccionados.map(({ _id, ...resto }) => resto);
        console.log(dato.r_controles)

        try {
            await postRiesgos(
                dato.idusuario,
                dato.nombre,
                dato.impacto_desc,
                dato.impacto_num,
                dato.impacto_porc,
                dato.probabilidad_desc,
                dato.probabilidad_num,
                dato.probabilidad_porc,
                dato.calificacion,
                dato.riesgo,
                dato.proceso_asignado,
                dato.r_causas,
                dato.r_controles
                
            )

            const { idusuario, ...datoSinIdUsuario } = dato;
            const nuevosRiesgos = [
                datoSinIdUsuario
            ];

            for (let i = 0; i < macroSeleccionados.length; i++) {
                await pushMacro(dato.idusuario, macroSeleccionados[i], nuevosRiesgos)
            }

            //Una vez registrado se cierra el modal
            setModalVisible(false);
            toast.success('¡Riego registrado de manera exitosa!');
            //Perimite refresar la tabla con los nuevos datos registrados
            buscarRiesgos("6531d08612ec096c58717b97", setDatariesgos)
            borrarData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='riesgo-container'>
            <ToastContainer />
            
            <div className='riesgo-desplegable'>
                <div className='B-riesgot'>
                    <div className='head-title'>
                        <h2>Riesgos</h2>
                        <div className='btn-flot'>
                            <Button variant="outlined" onClick={() => { registrar() }}>
                                Generar nuevo riesgo
                            </Button>
                        </div>
                    </div>

                    <p>"¡Bienvenido, al apartado de Control de Riesgos de nuestra página web!
                        Aquí encontrarás las herramientas y recursos necesarios para identificar,
                        evaluar, mitigar y gestionar riesgos en tus proyectos, negocios o
                        actividades cotidianas. Nuestra plataforma te brinda la capacidad
                        de tomar el control y mantener un entorno más seguro y eficiente,
                        incluso permitiéndote  crear nuevos riesgos para un análisis exhaustivo.
                    </p>
                </div>
                <div className='btn-mas'>
                    <Button variant="outlined" color="error" onClick={Desplegar}>
                        Ver mas
                    </Button>

                </div>

                <div className='B-riesgo-descripcion'>
                    <section className='B-desc'>
                        {mostrarDesc && <Descripcionr />}

                    </section>

                </div>

            </div>

            <div>
                <Tabla objriesgos={datariesgos} />
            </div>

            <section className="F">
                {modalVisible && (
                    <div className="modalBldm">
                        <Formularior
                            objrSetriesgos={setDatariesgos}
                            registroRiesgo={registroRiesgo}
                            closeBmodal={setModalVisible}
                            borrador={borrarData}
                        />
                    </div>
                )}
            </section>

        </div>
    );
}

export default Riesgos;