import React, { useState, useEffect } from 'react';
import './riesgos.css'

import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import Descripcionr from './Descripcionr/Descripcionr';
import Tabla from './tabalr/Tabla';
import Despacho from './despacho/Despacho';
import Formularior from './formularior/Formularior';

const Riesgos = () => {

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
        if (event.target.classList.contains("modal")) {
            setModalVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    console.log(modalVisible)

    return (
        <div className='riesgo-container'>

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
                <Tabla />
            </div>

            

            <section className="F">
            
                {modalVisible && (
                    <div className="modal">
                        <Formularior
                        />
                    </div>
                )}


            </section>
            

        </div>
    );
}

export default Riesgos;