import React, { useState, useEffect } from 'react';


import * as Datariesgo from '../../../utils/Datariesgo'
import { Forcontrol } from './Forcontrol';
import Valoresriesgo from '../../causas_conse/formularioc/Valoresriesgo';



const Formulariocontrol = (props) => {

    const { registroControl, closeBmodal, borrador } = props

    const buscarRiesgosx = Datariesgo.buscarRiesgos
    const [riesgo, setRiesgo] = useState([])


    const [componente, setComponente] = useState(
        <Forcontrol
            registroControl={registroControl}

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
                    Generar nuevo control
                </div>
                <div className='box-for'>
                    <div className='riesgo-descripcion'>
                        <h2>Opciones</h2>
                        <div className='rli'>
                            <ul>
                                <li onClick={() => setComponente(<Forcontrol registroControl={registroControl} />)} >
                                    Control
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
                        <button onClick={() => { closeBmodal(false); borrador() }}  >Cancelar</button>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Formulariocontrol;

