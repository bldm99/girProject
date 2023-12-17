import React, { useState, useEffect } from 'react';
import './formularioc.css'

import * as Datariesgo from '../../../utils/Datariesgo'
import Forcausa from './Forcausa';
import Valoresriesgo from './Valoresriesgo';


const Formularioc = (props) => {

    const { registroCausa, closeBmodal, borrador } = props

    const buscarRiesgosx = Datariesgo.buscarRiesgos
    const [riesgo , setRiesgo] = useState([])


    const [componente, setComponente] = useState(
        <Forcausa
            registroCausa={registroCausa}

        />
    );

    useEffect(() => {
        const obtenerdata = async () => {
            try {
                await buscarRiesgosx("6531d08612ec096c58717b97", setRiesgo)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()
    }, []);

    

    return (

        <div className='formularior'>

            <div className='box-for-cont'>
                <div className='for-title'>
                    Generar nueva causa o consecuencia
                </div>
                <div className='box-for'>
                    <div className='riesgo-descripcion'>
                        <h2>Opciones</h2>
                        <div className='rli'>
                            <ul>
                                <li onClick={() => setComponente(<Forcausa registroCausa={registroCausa} />)} >
                                    Causas y consecuencia
                                </li>
                                <li onClick={() => setComponente(<Valoresriesgo riesgo={riesgo} />)} >
                                    Asignar a Riesgo
                                </li>
                                
                            </ul>
                        </div>

                    </div>

                    <div className='for-componentes'>
                        {
                            componente
                        }
                    </div>



                </div>


                <div className='for-save'>
                    <div className='for-botones'>
                        <button onClick={() => { closeBmodal(false); borrador() }} >Cancelar</button>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Formularioc;

