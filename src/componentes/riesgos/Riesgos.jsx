import React, { useState, useEffect } from 'react';
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

const Riesgos = () => {


    const buscarRiesgos = Datariesgo.buscarRiesgos
    const postRiesgos = Datariesgo.postRiesgos

    const [datariesgos, setDatariesgos] = useState([])
    // Ordena los datos en objriesgos por la fecha en orden descendente
    const sortedData = datariesgos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));



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
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        const obtenerdata = async () => {
            try {
                const riesgos = await buscarRiesgos("6531d08612ec096c58717b97", setDatariesgos)
                
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
                dato.proceso_asignado
            )
            //Una vez registrado se cierra el modal
            setModalVisible(false);
            toast.success('¡Riego registrado de manera exitosa!');
            //Perimite refresar la tabla con los nuevos datos registrados
            await buscarRiesgos("6531d08612ec096c58717b97", setDatariesgos)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='riesgo-container'>
            <ToastContainer />
            <div className='btn-flot'>
                <Button variant="outlined" onClick={() => { registrar() }}>
                    Generar nuevo riesgo
                </Button>
            </div>

            <div className='riesgo-desplegable'>
                <div className='B-riesgot'>
                    <h2>Riesgos</h2>
                    <p>"¡Bienvenido al apartado de Control de Riesgos de nuestra página web!
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
                        />
                    </div>
                )}


            </section>


        </div>
    );
}

export default Riesgos;