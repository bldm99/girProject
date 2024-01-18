import React, { useState, useEffect } from 'react';
import './formupdate.css'
import Foriesgo from '../riesgos/formularior/Foriesgo';
import Updateriesgo from './Updateriesgo';

const Formupdate = (props) => {

    const { unicoriesgo, borrador, closeBmodal, funActualizarRiesgo } = props

    useEffect(() => {
    }, []);

    return (

        <div className='formupdate'>
            <div className='up-title'>
                Actualizar datos del riesgo
            </div>


            <div className='cont-update'>
                <div className='u-opciones'>
                    <h3>Opciones</h3>
                    <div className='u-cont'>
                        <ul>
                            <li >
                                Riesgo
                            </li>
                            <li >Asignar a Macroproceso</li>
                            <li>Asignar a Proceso</li>
                            <li >Asignar Causa</li>
                            <li >Asignar Control</li>
                        </ul>
                    </div>

                </div>

                <div className='u-componentes'>
                    <Updateriesgo
                        unicoriesgo={unicoriesgo}
                        funActualizarRiesgo={funActualizarRiesgo}
                    />
                </div>
            </div>

            <div className='for-save'>
                <div className='for-botones'>
                    <button onClick={() => { closeBmodal(false); borrador() }} >Cancelar</button>
                </div>
            </div>





        </div>

    );
}
export default Formupdate;

