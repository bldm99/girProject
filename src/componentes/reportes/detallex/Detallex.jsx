
import React, { useState, useEffect } from 'react';
import './detallex.css'

const Detallex = (props) => {

    const { unicoriesgo } = props

    const rgetColor = (riesgo) => {
        switch (riesgo) {
            case 'Bajo':
                return '#60bf52'; // Rojo
            case 'Medio':
                return '#FFC043'; // Naranja
            case 'Alto':
                return '#F27649'; // Naranja
            default:
                return '#F25252';
        }
    };

    return (
        <div className='detallex'>
            <div className='t-detallex'>
                <h2>Detalle de riesgo</h2>
            </div>
            <div className='scroll'>
                <div className="cont-detallex">
                    <div className='de1'>
                        <h3>{unicoriesgo.nombre}</h3>
                        <div>
                            <h3>Descripcion</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et vel laborum

                            </p>
                        </div>
                    </div>
                    <div className='de2'>
                        <div className='r-inherente'>
                            <div className='r-i1'>
                                <h4>Riego inherente</h4>
                                <button style={{ backgroundColor: rgetColor(unicoriesgo.riesgo) }} >{unicoriesgo.riesgo}</button>
                            </div>
                            <div className='r-i2'>
                                <div>
                                    <p>Impacto</p>
                                    <p>Calificacion directa</p>
                                    <div className='valor'>
                                        <div className='btn'>{unicoriesgo.impacto_desc}</div>
                                        <div>{unicoriesgo.impacto_porc}</div>
                                    </div>

                                </div>
                                <div >
                                    <p>Frecuencia</p>
                                    <p>Calificacion directa</p>
                                    <div className='valor'>
                                        <div className='btn'>{unicoriesgo.probabilidad_desc}</div>
                                        <div>{unicoriesgo.probabilidad_porc}</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='r-inherente'>
                            <div className='r-i1'>
                                <h4>Riesgo Residual</h4>
                                <button style={{ backgroundColor: rgetColor(unicoriesgo.riesgo) }} >{unicoriesgo.riesgo}</button>
                            </div>
                            <div className='r-i2'>
                                <div>
                                    <p>Impacto</p>
                                    <div className='valor'>
                                        <div className='btn'>{unicoriesgo.impacto_desc}</div>
                                        <div>{unicoriesgo.impacto_porc}</div>
                                    </div>

                                </div>
                                <div >
                                    <p>Frecuencia</p>
                                    <div className='valor'>
                                        <div className='btn'>{unicoriesgo.probabilidad_desc}</div>
                                        <div>{unicoriesgo.probabilidad_porc}</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>



        </div>
    );
}

export default Detallex;